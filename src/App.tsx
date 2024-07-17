import Card from "./components/Card";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

import { FaProjectDiagram } from "react-icons/fa";

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
          href="/path/to/your/resume.pdf"
          download
          className="mt-4 px-6 py-2 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition duration-300"
        >
          Download Resume
        </a>
      </div>
      <div className="w-full md:w-[70%] h-full md:overflow-scroll flex justify-start items-center flex-col gap-8 p-6 bg-white shadow-lg">
        <div className="md:w-full shadow-lg">
          <Tech />
        </div>
        <div className="flex justify-start items-center flex-col w-[100%] gap-4 bg-white shadow-lg">
          <h2 className="flex items-center text-4xl font-extrabold text-gray-800">
            <FaProjectDiagram className="mr-2 text-blue-500" /> Projects
          </h2>
          <p className="text-lg text-gray-600">
            A collection of my recent work showcasing my skills and experience.
          </p>
          <div className="w-full flex justify-center items-center flex-wrap gap-3">
            <Card />
          </div>
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default App;
