import React from "react";
import pixel1 from "../../images/people/pixel1.png";

export function Candidate(props) {
  return (
    <div>
      <div class="flex mt-5">
        <div className="flex items-center justify-between rounded-xl h-24 text-white bg-blue-900  shadow-md">
          <img className="h-full rounded-l-xl" src={pixel1} alt="person"></img>
          <div className="flex flex-col px-4">
            <span
              className="text-xs text-purple-300 pl-3
            pt-1"
            >
              Sept 13, 5pm EST
            </span>
            <p className="text-md font-semibold pixelName pl-3 pr-3 pt-2 pb-2 ">
              Antony Ganzolez
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
