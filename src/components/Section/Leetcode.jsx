import React from "react";

function Leetcode() {
  return (
    <>
      <section
        id="dsa"
        className="w-full bg-white dark:bg-gradient-to-br from-gray-900 to-gray-800 py-10 pb-[5rem]"
      >
        {/* This will be the container */}
        <div className="mx-auto w-[90%] md:w-[80%] flex flex-col gap-8">
          <div>
            <h1 className="bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-center text-transparent text-4xl font-bold py-2 pt-7 px-2">
              My Leetcode Journey
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6">
            <div className="flex justify-center items-center">
              <img
                className="dark:block hidden"
                src="https://leetcode-badge-showcase.vercel.app/api?username=DikshaBharti8&animated=true&theme=github-dark"
                alt="LeetCode Badges"
              />
              <img
                className="block dark:hidden rounded-2xl border-2 border-purple-300"
                src="https://leetcode-badge-showcase.vercel.app/api?username=DikshaBharti8&animated=true&theme=light"
                alt="LeetCode Badges"
              />
            </div>

            <div className="text-lg text-gray-700 dark:text-blue-50 text-justify grid grid-cols-1 gap-4">
              <p>
                Over the past year, I've solidified my Data Structures &
                Algorithms skills and my problem-solving capablities by
                completing over <b className="text-2xl font-semibold ">200+</b>{" "}
                Leetcode problems touching nearly all the concepts of
                programming.
              </p>

              <p>
                Each session starts with deliberate reading and analysis: I
                dissect the problem statement, understand constraints, and
                sketch out an initial brute-force approach before moving to
                optimized solutions
              </p>

              <p>
                I've even contributed to provide optimised solution for the
                difficult question by simplifying them.My goal is to keep
                improving and stay consistent in learning and solving new
                problems daily.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Leetcode;
