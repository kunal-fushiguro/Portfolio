import Card from "./components/Card";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

const App = () => {
  return (
    <div className="w-screen md:h-screen flex justify-center items-center md:flex-row flex-col bg-gray-100">
      <div className="w-full md:w-[30%] h-full bg-blue-500 flex justify-center items-center md:items-start flex-col gap-4 p-5">
        <img
          src="/self.jpg"
          alt="photo"
          className="rounded-full w-[50%] md:w-[60%] border-[4px] md:border-[6px] border-black shadow-lg"
        />

        <span className="font-bold text-4xl md:text-5xl text-white">
          Kunal S.
        </span>
        <span className="font-medium md:text-lg text-base text-white">
          Hi, I'm Kunal, a student with a passion for programming and
          technology. I enjoy exploring new computer-related technologies and
          staying up-to-date with the latest advancements in the tech world.
        </span>
        <a
          href=""
          download
          className="mt-4 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full md:w-[70%] h-full md:overflow-scroll flex justify-start items-center flex-col gap-8 p-6 bg-white shadow-2xl">
        {/* <nav className="w-full flex justify-center items-center gap-3 p-4 bg-gray-200 rounded-lg shadow-md">
          <div className="w-[40%] flex justify-center items-center gap-4">
            <span className="border-2 rounded-xl p-3 font-bold border-black cursor-pointer hover:bg-black hover:text-white transition duration-300">
              All
            </span>
            <span className="border-2 rounded-xl p-3 font-bold border-black cursor-pointer hover:bg-black hover:text-white transition duration-300">
              Projects
            </span>
            <span className="border-2 rounded-xl p-3 font-bold border-black cursor-pointer hover:bg-black hover:text-white transition duration-300">
              Contact
            </span>
          </div>
        </nav> */}

        <div className="md:w-full bg-white shadow-lg">
          <Tech />
        </div>
        <div className="flex justify-start items-center flex-col w-[100%] gap-4 bg-white shadow-lg">
          {/* <span className="w-[95%] text-center border-2 rounded-xl p-3 font-bold text-2xl border-black bg-gray-200 shadow-md">
            Projects
          </span> */}
          <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
          <div className="w-full flex justify-center items-center flex-wrap gap-3 ">
            <Card />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
};

export default App;
