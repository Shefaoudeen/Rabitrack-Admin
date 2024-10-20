import React from "react";
import { AtalLogo, DClogo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex  justify-center items-center p-2 gap-8 bg-slate-200">
      <div>
        <img src={AtalLogo} alt="" className="max-h-[75px]" />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-xl">Developed by </h1>
        <h1 className="text-center max-md:text-xs">
          <a
            href="http://www.aicpecf.org/"
            target="_blank"
            className="font-medium"
          >
            AIC-PECF
          </a>{" "}
          with Collaboration with{" "}
          <a
            href="https://ptu-designclub.netlify.app/"
            target="_blank"
            className="font-medium"
          >
            Design Club - PTU
          </a>
        </h1>
      </div>
      <div>
        <img src={DClogo} alt="" className="max-h-[75px]" />
      </div>
    </div>
  );
};

export default Footer;
