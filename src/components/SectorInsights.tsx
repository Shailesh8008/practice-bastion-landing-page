import React from "react";

export const SectorInsights: React.FC = () => {
  return (
    <section className="py-10 pl-4 sm:pl-6 pr-4 relative overflow-hidden">
      <div className="absolute -z-50 w-full h-full top-0 left-0 -scale-x-100">
        <img src="/images/background1.jpg" alt="" className="h-full w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
        <div className="lg:w-1/3 flex flex-col space-y-8">
          <h2 className="text-5xl font-black text-white leading-tight text-center lg:text-start">
            Decode
            <br />
            Booming
            <br />
            sectors
            <br />
            with us
          </h2>
          <div className="mx-auto lg:mx-0">
            <button className="bg-white hover:bg-gray-200 transition-all duration-300 text-black font-bold text-lg py-6 px-14 tracking-widest leading-tight rounded-full self-start uppercase cursor-pointer hover:scale-105 active:scale-95">
              SUBSCRIBE NOW
              <br />
              FOR FREE!!!
            </button>
          </div>
          <div className="max-w-80 mx-auto lg:mx-0">
            <img
              src="/images/sittingPeople.png"
              alt="sittingPeople"
              className="-scale-x-100"
            />
          </div>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 px-3 py-6 sm:p-8 rounded-4xl self-start relative overflow-hidden">
          <div className="absolute top-0 left-0 -z-50 w-full h-full bg-white opacity-30"></div>
          {/* Sector Card 1: BESS */}
          <div className="relative group overflow-hidden h-[32rem] rounded-t-2xl sm:rounded-none">
            <div className="absolute top-0 left-0 w-full -z-45 h-full items-center content-center">
              <img src="/images/storage.png" alt="" className="scale-[275%] sm:scale-[275%]" />
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
            </div>
            <div className="h-full flex flex-col">
              <div className="p-4">
                <div className="items-start w-18 mx-auto">
                  <img src="/images/logoOther.png" alt="" />
                </div>
                <p className="text-[#ffde59] font-black text-xl sm:text-[2rem] mt-4 text-center md:text-end">
                  BESS
                </p>
                <p className="text-white tracking-widest text-lg text-center md:text-end">
                  BACKING UP THE RENEWABLES
                </p>
              </div>
              <div className="px-3 absolute bottom-6">
                <p className="text-[#ffde59] text-lg font-black text-center tracking-widest">
                  THE MISSING LINK IN THE CLEAN ENERGY EQUATION
                </p>
              </div>
            </div>
          </div>

          {/* Sector Card 2: Semiconductors */}
          <div className="relative group overflow-hidden sm:h-[32rem] rounded-b-2xl sm:rounded-none">
            <div className="absolute top-0 left-0 w-full -z-45 h-full items-center content-center">
              <img
                src="/images/processor.jpg"
                alt=""
                className="scale-[350%] sm:scale-[325%]"
              />
              <div className="absolute top-0 left-0 w-full h-full opacity-60">
                <img
                  src="/images/overlay.jpg"
                  alt="overlay"
                  className="w-full h-full"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>
            <div className="h-full flex flex-col">
              <div className="p-4">
                <div className="items-start w-18 mx-auto">
                  <img src="/images/logoOther.png" alt="" />
                </div>
                <p className="text-[#ffde59] font-black text-xl sm:text-[1.7rem] mt-4 text-center md:text-start">
                  SEMICONDUCTORS
                </p>
                <p className="text-white tracking-widest text-lg text-center md:text-start">
                  INSIDE THE NANO WORLD
                </p>
              </div>
              <div className="px-8 flex justify-center py-2">
                <div className="max-w-60 justify-center overflow-hidden">
                  <img
                    src="/images/chip.avif"
                    alt=""
                    className="w-full translate-x-6"
                  />
                </div>
              </div>
              <div className="px-4 pb-8">
                <p className="text-[#ffde59] text-lg font-black uppercase text-center tracking-widest">
                  THE UNSEEN HEARTBEAT BEHIND TODAY'S DIGITAL WORLD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
