import Data from "../data/Projects.json";

const Card = () => {
  return (
    <>
      {Data.map((item) => {
        return (
          <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.name}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              {item.tech.map((techItem) => (
                <span
                  key={techItem.id}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {techItem.techname}
                </span>
              ))}
            </div>
            <div className="px-6 pt-4 pb-4">
              <a
                href={item.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                View Project
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
