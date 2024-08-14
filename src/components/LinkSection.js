import React from "react";
import linkdin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import link from "../Assets/link.png"

const LinkSection = () => {
  return (
    <div className="bg-blue-300 p-4 rounded-[20px] shadow-lg mb-4 max-w-[80%] ml-[35px]">
      <h3 className="text-lg font-semibold mb-2 text-center">LINKS</h3>
      <label className="flex flex-col mb-3">
        Linkdin
        <div className="flex flex-row items-center">
          <img src={linkdin} className="w-4 h-4 ml-2 absolute" alt="linkdin logo" />
          <input
            className="bg-blue-50 ml-7 max-w-60"
            type="text"
            placeholder="paste your link"
          />
        </div>
      </label>
      <label className="flex flex-col mb-3">
        Github
        <div className="flex flex-row items-center">
          <img src={github} className="w-4 h-4 ml-2 absolute" alt="linkdin logo" />
          <input
            className="bg-blue-50 ml-7 max-w-60"
            type="text"
            placeholder="paste your link"
          />
        </div>
      </label>
      <label className="flex flex-col mb-3">
        Any relatable link
        <div className="flex flex-row items-center">
          <img src={link} className="w-4 h-4 ml-2 absolute" alt="linkdin logo" />
          <input
            className="bg-blue-50 ml-7 max-w-60"
            type="text"
            placeholder="paste your link"
          />
        </div>
      </label>
    </div>
  );
};

const SkillSection = () => {
  return (
    <div className="bg-yellow-100 p-4 rounded-[20px] shadow-lg mb-4 max-w-[80%] ml-[35px]">
      <h3 className="text-lg font-semibold mb-2 text-center">SKILLS</h3>
      <p>Skill 1</p>
      <p>Skill 2</p>
      <p>Skill 3</p>
    </div>
  );
};


  const PreferedShift = () => {
    return (
      <div className="bg-blue-300  rounded-[20px] shadow-lg mb-4 p-10 max-w-[80%] ml-[35px] flex flex-col">
        <label className="flex flex-col p-2">Prefered Shift
            <input className=" bg-blue-100 rounded-lg max-w-60" type="text" />
        </label>
        <label className="flex flex-col p-2">Employment Type
            <input className="bg-blue-100 rounded-lg max-w-60" type="text"/>
        </label>
        <label className="flex flex-col p-2">Prefered locations
            <input className=" bg-blue-100 rounded-lg max-w-60" type="text" />
        </label>
      </div>
    );
};

export { LinkSection, SkillSection, PreferedShift };
