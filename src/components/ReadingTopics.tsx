import React from "react";

interface TopicCardProps {
  title: string;
  description: string;
  image: string;
  isRedHeader?: boolean;
  shadowColor?: string | "";
}

const TopicCard: React.FC<TopicCardProps> = ({
  title,
  description,
  image,
  isRedHeader,
  shadowColor = "",
}) => (
  <div
    className={`flex flex-col overflow-hidden duration-300 transition-all hover:-translate-y-2 hover:shadow-2xl group ${shadowColor} cursor-pointer`}
  >
    <div className="h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div
      className={`p-8 flex-1 flex flex-col items-center text-center text-white ${
        isRedHeader ? "bg-red-600" : "bg-black"
      }`}
    >
      <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">
        {title}
      </h3>
      <p className="text-gray-200 leading-relaxed">{description}</p>
    </div>
  </div>
);

export const ReadingTopics: React.FC = () => {
  const topics = [
    {
      title: "Macro Topics",
      description: "Decoding the global shifts impacting your wallet.",
      image: "/images/money.webp",
      isRedHeader: true,
    },
    {
      title: "Company Developments",
      description: "Inside the boardroom: What's changing at top firms.",
      image: "/images/building.webp",
      isRedHeader: true,
    },
    {
      title: "IPO Analysis",
      description: "IPO Watch: Who's ready to launch (and who to avoid).",
      image: "/images/ipo.webp",
      isRedHeader: true,
    },
    {
      title: "Investing Concepts",
      description: "Back to basics: The mental models of smart investing.",
      image: "/images/brain.webp",
      isRedHeader: false,
    },
    {
      title: "Plant Visits Insights",
      description: "From the source: Real-time reports from our site visits.",
      image: "/images/factory.jpg",
      isRedHeader: false,
    },
    {
      title: "Business Dynamics",
      description: "How great businesses actually make money.",
      image: "/images/business.avif",
      isRedHeader: false,
    },
  ];

  return (
    <section className="">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#021e10] pt-24 pb-9 px-6 md:px-20">
          <h2 className="text-4xl md:text-6xl text-white font-black text-center mb-20 tracking-tight">
            What Do You Get To Read?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-18">
            {topics.slice(0, 3).map((topic, i) => (
              <TopicCard key={i} {...topic} shadowColor="shadow-green-800" />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="bg-white hover:bg-gray-200 transition-all duration-300 text-black font-black py-4 px-12 rounded-full text-xs sm:text-xl shadow-xl cursor-pointer max-w-108 hover:scale-105 active:scale-95 ">
              JOIN THOUSANDS READING IT FOR FREE!!!
            </button>
          </div>
        </div>

        <div className="bg-red-600 pt-24 pb-14 px-6 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-18">
            {topics.slice(3).map((topic, i) => (
              <TopicCard key={i} {...topic} shadowColor="shadow-black" />
            ))}
          </div>

          <div className="mt-10 text-center">
            <button className="bg-white hover:bg-gray-200 transition-all duration-300 text-black font-black py-4 px-12 rounded-full text-xs sm:text-xl shadow-xl cursor-pointer max-w-108 hover:scale-105 active:scale-95 ">
              JOIN THOUSANDS READING IT FOR FREE!!!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
