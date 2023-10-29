import React from "react";

const Project = (props) => {
  const imgStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div className="bg-slate-900 shadow-lg rounded-lg overflow-hidden hover:bg-slate-800 cursor-pointer transition hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="p-5 h-full">
        <a
          href={props.projectLink}
          target="_blank"
          className="flex flex-col h-full justify-between"
        >
          <h2 className="text-xl font-medium text-gray-200 ">{props.title}</h2>
          <p className="text-gray-400 mb-1">({props.linkType})</p>
          <div>
            <img
              src={props.imgLink}
              alt={props.alt}
              style={imgStyle}
              className="shadow-lg rounded-lg overflow-hidden"
            />
          </div>
          <div>
            <p className="text-md text-gray-300 mb-2 mt-3">
              {props.usedSkills}
            </p>
            <a
              href={props.projectLink}
              className="inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition-colors duration-300"
              target="_blank"
            >
              Visit
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
