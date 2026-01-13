import React from "react";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#021e10] pt-18 pb-10 px-6 md:px-20 text-white overflow-hidden relative">
      {/* Background Star Decoration */}

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 mb-16 lg:mb-0 self-start mx-auto lg:mx-0">
          <h2 className="text-2xl sm:text-[3.2rem] font-bold leading-10 sm:leading-14 tracking-tight sm:mb-13 mb-8 ">
            Begin your
            <br />
            access to crisp
            <br />
            Investing
            <br />
            Insights
          </h2>

          <button className="bg-white hover:bg-gray-100 text-black font-black sm:text-lg text-md px-5 py-3 sm:py-4 sm:px-18 rounded-full shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 mb-13">
            SUBSCRIBE NOW FOR FREE!!!
          </button>

          <div className="space-y-6">
            <h4 className="text-red-600 font-black text-2xl uppercase tracking-wider">
              CONNECT WITH US
            </h4>

            <div className="space-y-4">
              <Link
                to="#"
                className="flex items-center gap-4 hover:text-blue-600 active:text-blue-600 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-black group-hover:bg-blue-600 group-active:bg-blue-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">
                  Twitter: @bastionresearch
                </span>
              </Link>

              <Link
                to="#"
                className="flex items-center gap-4 hover:text-red-600 active:text-red-600 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-black group-hover:bg-red-600 group-active:bg-red-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">
                  YouTube: Bastion Research
                </span>
              </Link>

              <Link
                to="#"
                className="flex items-center gap-4 hover:text-blue-600 active:text-blue-600 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-black group-hover:bg-blue-600 group-active:bg-blue-600 group-hover:text-white transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <span className="text-xl font-semibold">
                  Linkedin: Bastion Research
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end self-start lg:mr-8">
          <div className="relative group">
            <div className="w-60 h-60 lg:w-120 lg:h-124 sm:w-84 sm:h-84">
              <div className="relative group max-w-md z-50 top-25 sm:top-33 lg:top-48 -left-7 sm:-left-11 lg:-left-18 lg:w-[225px] sm:w-[150px] w-[100px]">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-spin [animation-duration:9s]"
                >
                  <g stroke="#E0E0E0" strokeWidth="12" strokeLinecap="butt">
                    <line x1="50" y1="10" x2="50" y2="90" />
                    <line x1="10" y1="50" x2="90" y2="50" />
                    <line x1="21.7" y1="21.7" x2="78.3" y2="78.3" />
                    <line x1="78.3" y1="21.7" x2="21.7" y2="78.3" />
                  </g>
                </svg>
              </div>
              <div className="absolute top-0 left-0 w-full h-full z-40">
                <img
                  src={`${import.meta.env.BASE_URL}images/footerImg.png`}
                  alt="footer image"
                  className="w-full h-[110%] [clip-path:polygon(2.8%_0%,0%_0%,36%_17%,121%_11%,100%_13%,83%_100%,14%_74%,14%_60%,0%_37%)]"
                />
              </div>
              <div className="absolute top-8 left-8 sm:top-10 sm:left-10 w-[13rem] h-[13rem] sm:w-[18rem] sm:h-[18rem] lg:w-[27rem] lg:h-[27rem] bg-red-600 rounded-full blur-2xl opacity-35 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bastion Research. All rights reserved.
      </div>
    </footer>
  );
};
