import CountUp from "react-countup";
import expIcon from "../assets/bag.webp";
import desIcon from "../assets/destination-hikker.webp";
import advIcon from "../assets/hikker.webp";
import guideIcon from "../assets/guide-hikker.webp";

const Stats = () => {
  const stats = [
    { icon: expIcon, number: 14, label: "Years of Experience", suffix: " +"  },
    { icon: desIcon, number: 60, label: "Best Destinations", suffix: " +" },
    { icon: advIcon, number: 27, label: "Satisfied Hikers", suffix: " k" },
    { icon: guideIcon, number: 30, label: "Certified Guides", suffix: " +" }
  ];

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

      {stats.map((stat, i) => (
        <div key={i} className="flex items-center gap-4 justify-center ">
         
          <img src={stat.icon} alt={stat.label} className="w-16 h-16" />

          <div>
            <h2 className="text-5xl font-bold text-[#0D3A48]">
              <CountUp
                end={stat.number}
                duration={2.5}
                suffix={stat.suffix || ""}
                enableScrollSpy
              />
            </h2>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;

