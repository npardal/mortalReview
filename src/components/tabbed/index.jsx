import React from "react";
import { Candidate } from "../candidate";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 rounded-xl flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 rounded-xl shadow-lg block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center rounded-xl">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal rounded-xl " +
                  (openTab === 2
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded-lg">
            <div className="px-4 py-5 flex-auto rounded-lg">
              <div className="tab-content tab-space rounded-lg">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Candidate></Candidate>
                  <Candidate></Candidate>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <Candidate></Candidate>
                  <h1>hello</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Tabs color="blue" />
    </>
  );
}
