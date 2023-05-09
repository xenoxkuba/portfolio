const Project = (props) => {
  return (
    <div className="bg-slate-100 shadow-lg rounded-lg overflow-hidden hover:bg-slate-400 cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="p-5">
        <a href={props.projectLink} target="_blank">
          <h2 className="text-xl font-medium text-gray-800 mb-3">
            {props.title}
          </h2>
          <img
            src={props.imgLink}
            alt={props.alt}
            className="shadow-lg rounded-lg overflow-hidden "
          />

          <p className="text-md text-gray-600 mb-2 mt-3">
            Used Skills: {props.usedSkills}
          </p>
          <a
            href={props.projectLink}
            className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
            target="_blank"
          >
            Visit
          </a>
        </a>
      </div>
    </div>
  );
};

export default Project;
