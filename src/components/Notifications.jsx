import { IMG_URL } from "../assets/profileimg";

const Notifications = () => {
  return (
    <div className="w-[300px] border-r border-gray-500 fixed ml-16 h-[100vh] z-10">
      <div className="w-[93%] mx-auto"> {/* Added consistent padding */}
        <h2 className="text-2xl font-semibold my-4">Notifications</h2> {/* Adjusted font size */}
      </div>
      <div className="mx-4"> {/* Added consistent margin */}
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between my-2 hover:bg-gray-300 hover:bg-opacity-25 cursor-pointer p-2 rounded-md"
          >
            <div className="flex items-center bg-transparent">
              <img
                src={IMG_URL}
                className="w-8 h-8 rounded-full mr-2"
                alt="profile"
              />
              <div className="bg-transparent">
                <p className="font-semibold text-sm bg-transparent">Username</p> {/* Adjusted font size */}
                <p className="text-sm bg-transparent">Notification message</p> {/* Adjusted font size */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
