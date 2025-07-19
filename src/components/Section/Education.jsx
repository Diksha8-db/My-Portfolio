import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Certificate01Icon,
  Medal02Icon,
  Mortarboard02Icon,
} from "@hugeicons/core-free-icons";

function Education() {
  const educationInfo = [
    {
      year: "2024 - 2028",
      institute: "National Institute of Technology, Patna",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "10/10",
    },
    {
      year: "2022 - 2024",
      institute: "Chauhan Public School, Bhagalpur, Bihar",
      degree: "Higher Secondary School Certificate",
      grade: "96.4%",
    },
    {
      year: "2021 - 2022",
      institute: "Happy Valley School, Bhagalpur, Bihar",
      degree: "Secondary School Certificate",
      grade: "93.6%",
    },
  ];

  return (
    <section
      id="education"
      className="[clip-path:polygon(80%_0,100%_4%,100%_100%,1%_100%,0_3%)]
    dark:[clip-path:none] transition-all duration-300
 px-2 pt-12 py-12 w-full dark:bg-gray-800 dark:text-white bg-purple-100 min-h-screen"
    >
      <div className="w-[90%] mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-transparent text-5xl font-bold">
            Education
          </h1>
          <p className="text-center text-violet-500 dark:text-gray-300 md:text-lg">
            My continuous pursuit of education highlights my perseverance and
            knack for mastering new skills efficiently.
          </p>
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto py-5">
          <div className="flex flex-row gap-x-12">
            {/* Vertical line and icons */}
            <div className="md:flex hidden w-1 bg-purple-600  flex-col justify-around items-center">
              {educationInfo.map((_, index) => (
                <div key={index} className="mb-[7rem]">
                  <div className="bg-gray-300 border-4 border-purple-500 p-2 rounded-full">
                    <HugeiconsIcon
                      color="purple"
                      strokeWidth={2}
                      icon={Mortarboard02Icon}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Education Info Cards */}
            <div className="flex flex-col gap-8 py-2 w-full">
              {educationInfo.map((education, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 bg-purple-200 dark:bg-gray-700 px-4 py-5 md:p-6 rounded-lg border border-transparent hover:border-violet-700 hover:dark:border-violet-400 hover:-translate-y-1.5 transition-all duration-400 ease-linear"
                >
                  <p className="flex flex-row gap-2 bg-purple-500 text-white max-w-max items-center justify-center rounded-xl px-3 py-2 font-semibold">
                    <HugeiconsIcon
                      color="white"
                      strokeWidth={2}
                      icon={Certificate01Icon}
                    />
                    {education.year}
                  </p>
                  <p className="md:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
                    {education.degree}
                  </p>
                  <p className="md:text-lg text-md dark:text-purple-400 text-purple-600 font-medium">
                    {education.institute}
                  </p>
                  <p className="flex items-center gap-2 dark:text-white text-black">
                    <HugeiconsIcon icon={Medal02Icon} strokeWidth={2} />
                    {`Grade: ${education.grade}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
