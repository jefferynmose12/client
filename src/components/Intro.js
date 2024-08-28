import React from "react";
import { BsArrowRight } from "react-icons/bs";
import galaxy from "../images/galaxy.svg";
import { BsMoonFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useStoreContext } from "../hook/useStoreContext";
import { TypewriterEffectSmooth } from "./ui/design";

const Intro = () => {
  const { mode, setMode } = useStoreContext();

  const words = [
    {
      text: "Hello!",
      className: `text-3xl lg:text-5xl font-semibold tracking-widest ${
        mode ? "text-white" : null
      }`,
    },
    {
      text: "I’m",
      className: `text-3xl lg:text-5xl font-semibold tracking-widest ${
        mode ? "text-white" : null
      }`,
    },
    {
      text: "Jeffery.",
      className: `text-3xl lg:text-5xl font-semibold tracking-widest text-yellow-600`,
    },
  ];

  return (
    <div
      className={
        "relative pt-60 md:pt-80 pb-24 px-2 md:px-10 lg:px-28 xl:px-44 bg-white flex flex-col items-center justify-center " +
        (mode ? "bg-gray-800 " : null)
      }
    >
      <TypewriterEffectSmooth words={words} />
      <p
        className={
          "mb-10 md:w-3/4 2xl:w-1/2 text-center tracking-wide md:text-lg " +
          (mode ? "text-white" : null)
        }
      >
        A creative front-end developer with a vast experience of building web
        applications with React.Js, React Native, Next.js. Using JavaScript /
        TypeScript.
      </p>
      <a href="#work">
        <button
          className={
            "relative flex items-center justify-center gap-2 tracking-wide bg-gray-200 border-bl-4 border-2 border-yellow-500 w-48 h-12 transition duration-500 ease-in hover:scale-95 hover:text-yellow-600 " +
            (mode ? "bg-gray-700 text-white " : null)
          }
        >
          View my work <BsArrowRight />
          <div className="absolute h-2 w-2 -top-1 -left-1 bg-orange-400" />
          <div className="absolute h-2 w-2 -bottom-1 -left-1 bg-orange-400" />
          <div className="absolute h-2 w-2 -top-1 -right-1 bg-orange-400" />
          <div className="absolute h-2 w-2 -bottom-1 -right-1 bg-orange-400" />
        </button>
      </a>
      <img
        src={galaxy}
        alt="galaxy"
        className="absolute right-0 top-40 md:top-40 h-2/5 md:h-2/3"
      />
      {mode === false ? (
        <div
          className="cursor-pointer bg-gray-700 rounded-full p-5 fixed bottom-12 md:bottom-8 right-4 lg:right-20 xl:right-40 z-30"
          onClick={() => setMode(true)}
        >
          <BsMoonFill className="text-white text-2xl" />
        </div>
      ) : (
        <div
          className="cursor-pointer bg-white rounded-full p-5 fixed bottom-12 md:bottom-8 right-4 lg:right-20 xl:right-40 z-30"
          onClick={() => setMode(false)}
        >
          <BsSunFill className="text-2xl" />
        </div>
      )}
    </div>
  );
};

export default Intro;
