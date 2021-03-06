import React from "react";
import Cloudy from "../assets/icons/animated/cloudy.svg";
import Cloudy2 from "../assets/icons/animated/cloudy-day-2.svg";
import Cloudy3 from "../assets/icons/animated/cloudy-day-3.svg";
import Rain3 from "../assets/icons/animated/rainy-3.svg";
import Rain1 from "../assets/icons/animated/rainy-1.svg";
import Rain2 from "../assets/icons/animated/rainy-2.svg";
import Rain5 from "../assets/icons/animated/rainy-5.svg";
import Rain6 from "../assets/icons/animated/rainy-6.svg"; //alot of rain
import Rain7 from "../assets/icons/animated/rainy-7.svg"; //heavy rain
import Sun from "../assets/icons/animated/day.svg";
import Snowy from "../assets/icons/animated/snowy-6.svg";
import Thunder from "../assets/icons/animated/thunder.svg";
import Fog from "../assets/icons/animated/fog.png";
import Haze from "../assets/icons/animated/haze.png";
import Mist from "../assets/icons/animated/mist.png";
import Dust from "../assets/icons/animated/dust.png";
import Smoke from "../assets/icons/animated/smoke.png";

const getIcon = (code) => {
  switch (code) {
    case 800:
      return <img className="Icon" src={Sun} alt={Sun} />;

    case 801: //few clouds
      return <img className="Icon" src={Cloudy} alt={Cloudy} />;

    case 802: //scattered clouds
      return <img className="Icon" src={Cloudy2} alt={Cloudy2} />;

    case 803: //broken clounds
      return <img className="Icon" src={Cloudy3} alt={Cloudy3} />;

    case 500: //light rain
      return <img className="Icon" src={Rain1} alt={Rain1} />;

    case 501: //moderate rain
      return <img className="Icon" src={Rain5} alt={Rain5} />;

    case 502: //heavy intesity
      return <img className="Icon" src={Rain7} alt={Rain7} />;
    case 503: // very heavy intesity
      return <img className="Icon" src={Rain6} alt={Rain6} />;

    case 600: //ligth snow
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 601: //snow
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 602: //heavy snow
      return <img className="Icon" src={Snowy} alt={Snowy} />;

    case 200: //thunderstorm
      return <img className="Icon" src={Thunder} alt={Thunder} />;

    case 201: //thunderstorm
      return <img className="Icon" src={Thunder} alt={Thunder} />;

    case 300: //light intesity drizzle
      return <img className="Icon" src={Rain2} alt={Rain2} />;

    case 301: //drizzle
      return <img className="Icon" src={Rain2} alt={Rain2} />;

    case 302: //heavy intesity drizzle
      return <img className="Icon" src={Rain3} alt={Rain3} />;

    case 701: //mist
      return <img className="Icon" src={Mist} alt={Mist} />;

    case 711: //smoke
      return <img className="Icon" src={Smoke} alt={Smoke} />;

    case 721: //haze
      return <img className="Icon" src={Haze} alt={Haze} />;

    case 731: //dust
      return <img className="Icon" src={Dust} alt={Dust} />;
    case 741: //fog
      return <img className="Icon" src={Fog} alt={Fog} />;

    default:
      return <img className="Icon" src={Cloudy} alt={Cloudy} />;
  }
};
export default getIcon;
//loading="lazy"
