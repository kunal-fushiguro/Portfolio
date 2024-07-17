import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800">Contact</h2>
      <div className="flex justify-center items-center gap-6">
        <a
          href="https://x.com/kunalNiga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700 transition duration-300"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://github.com/kunal-fushiguro"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-gray-900 transition duration-300"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/kunal-sharma-580901285/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <FaLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
