import { useState } from "react";

const Tech = () => {
  const [data] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "TypeScript" },
    { id: 5, name: "React" },
    { id: 6, name: "Express" },
    { id: 7, name: "Mongodb" },
    { id: 8, name: "Tailwind CSS" },
    { id: 9, name: "Python" },
    { id: 10, name: "C++" },
  ]);

  return (
    <div className="w-full flex justify-center items-center flex-wrap gap-3 p-4">
      {data.map((item) => (
        <span
          key={item.id}
          className="inline-block bg-blue-200 rounded-full px-4 py-2 text-lg font-semibold text-blue-700 mr-2 mb-2 hover:bg-blue-300 hover:text-blue-800 transition duration-300 ease-in-out shadow-md"
        >
          {item.name}
        </span>
      ))}
    </div>
  );
};

export default Tech;
