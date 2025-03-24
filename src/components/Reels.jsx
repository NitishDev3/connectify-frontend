import React, { useState, useRef, useEffect } from "react";
import reelsData from "../assets/reels.json"; // Import reels data from JSON
import { MutedSvg, UnmutedSvg } from "../assets/svgcomponents";

const Reels = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const videoRefs = useRef([]);
  const containerRef = useRef(null);
  const isScrolling = useRef(false);

  // Extract videos from the first category in the JSON file
  const reels = reelsData.categories[0].videos.map((video, index) => ({
    id: index + 1,
    src: video.sources[0],
    likes: Math.floor(Math.random() * 5000) + 1, // Random likes for demo
    comments: Math.floor(Math.random() * 100) + 1, // Random comments for demo
  }));

  // Handle scroll to snap to videos
  const handleScroll = () => {
    if (isScrolling.current) return;

    const container = containerRef.current;
    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;
    const currentIndex = Math.round(scrollPosition / containerHeight);

    if (currentIndex !== currentVideo) {
      isScrolling.current = true;
      setCurrentVideo(currentIndex);

      container.scrollTo({
        top: currentIndex * containerHeight,
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrolling.current = false;
      }, 500);
    }
  };

  // Auto-scroll to current video when changed
  useEffect(() => {
    if (!containerRef.current || isScrolling.current) return;

    const container = containerRef.current;
    container.scrollTo({
      top: currentVideo * container.clientHeight,
      behavior: "smooth",
    });
  }, [currentVideo]);

  // Play/pause video when it's in/out of view
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentVideo) {
          const playPromise = video.play();

          if (playPromise !== undefined) {
            playPromise.catch((error) => {
              // Auto-play was prevented, mute and try again
              video.muted = true;
              setIsMuted(true);
              video.play().catch((e) => console.log("Playback failed:", e));
            });
          }
        } else {
          video.pause();
          video.currentTime = 0;
        }
      }
    });
  }, [currentVideo]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRefs.current[currentVideo]) {
      videoRefs.current[currentVideo].muted = !isMuted;
    }
  };

  return (
    <div className="-z-10 md:w-[82vw] absolute right-0">
      {/* Scrollbar hidden container */}
      <div
        className="w-[35%] flex-col mx-auto border border-gray-500 h-[100vh] overflow-y-scroll snap-y snap-mandatory"
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
        }}
      >
        {/* Inner container to hide scrollbar in WebKit browsers */}
        <div className="[&::-webkit-scrollbar]:hidden">
          {reels.map((reel, index) => (
            <div
              key={reel.id}
              className="w-full h-[100vh] bg-black relative snap-always snap-start"
            >
              {/* Video container - full width while maintaining aspect ratio */}
              <div className="w-full h-full flex items-center justify-center bg-black">
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  className="h-full w-full object-cover"
                  src={reel.src}
                  loop
                  autoPlay
                  muted={isMuted}
                  playsInline
                />
              </div>

              {/* Sound toggle button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-opacity-50 rounded-full p-2"
              >
                {isMuted ? <MutedSvg /> : <UnmutedSvg />}
              </button>

              {/* Instagram-like controls overlay */}
              <div className="absolute bottom-20 right-4 flex flex-col items-center space-y-4 bg-transparent">
                <div className="flex flex-col items-center bg-transparent">
                  <button className="text-white text-2xl bg-transparent">
                    ❤️
                  </button>
                  <span className="text-white text-sm bg-transparent">
                    {reel.likes.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col items-center bg-transparent">
                  <button className="text-white text-2xl bg-transparent">
                    💬
                  </button>
                  <span className="text-white text-sm bg-transparent">
                    {reel.comments.toLocaleString()}
                  </span>
                </div>
                <button className="text-white text-2xl bg-transparent">
                  🔗
                </button>
              </div>

              {/* User profile at bottom left */}
              <div className="absolute bottom-4 left-4 flex items-center bg-transparent">
                <div className="w-8 h-8 rounded-full bg-white mr-2"></div>
                <span className="text-white text-sm bg-transparent">
                  username
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reels;
