import { useEffect, useRef, useState } from "react";
import { HashLink } from "react-router-hash-link";
import InfoTooltip from "./InfoTooltip";
import { BsFillLightbulbFill } from "react-icons/bs";
import { FaDiagramProject, FaMoneyBillWave, FaSchool } from "react-icons/fa6";

const projectIcons = {
  entrepreneurship: {
    title: "Entrepreneurship",
    icon: <BsFillLightbulbFill color="white" size="24" />,
    color: "bg-gray-500",
  },
  personalProject: {
    title: "Personal Project",
    icon: <FaDiagramProject color="white" size="24" />,
    color: "bg-red-500",
  },
  freelance: {
    title: "Freelance",
    icon: <FaMoneyBillWave color="white" size="24" />,
    color: "bg-green-500",
  },
  school: {
    title: "School Project",
    icon: <FaSchool color="white" size="24" />,
    color: "bg-blue-500",
  },
};

function ProjectContainer(props) {
  const videoRef = useRef();
  const [videoLoading, setVideoLoading] = useState(true);
  const iconData = projectIcons[props.category];

  useEffect(() => {
    if (props.videoSrc) {
      const handleVideoEnded = () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      };

      if (videoRef.current) {
        videoRef.current.addEventListener("ended", handleVideoEnded);
      }

      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("ended", handleVideoEnded);
        }
      };
    }
  }, [videoRef]);

  return (
    <HashLink
      to={`/projects/${props.name.toLowerCase().replaceAll(" ", "_")}#top`}
      className="relative rounded-lg overflow-hidden group aspect-[3/2] duration-300"
      onMouseEnter={() => {
        if (videoRef.current) {
          videoRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="absolute top-0 left-0 z-30 w-full">
        <div className="bg-gradient-to-b from-black/70 to-transparent w-full h-20 absolute top-0 left-0 -z-10" />

        <div className="flex justify-between p-4">
          <p className="text-white text-2xl font-semibold">{props.name}</p>
          <InfoTooltip text={iconData.title}>
            <div className={`rounded-full ${iconData.color} p-2`}>
              {iconData.icon}
            </div>
          </InfoTooltip>
        </div>
      </div>
      {props.videoSrc ? (
        <>
          {videoLoading && (
            <div className="absolute inset-0 w-full h-full flex items-center justify-center gap-2 text-white">
              <div className="loading" /> Loading...
            </div>
          )}
          <video
            src={props.videoSrc}
            ref={videoRef}
            onLoadedData={() => setVideoLoading(false)}
            muted
            className="object-cover absolute inset-0 w-full h-full z-10 group-hover:scale-110 duration-300"
          />
        </>
      ) : (
        <img
          src={props.src}
          className="object-cover absolute inset-0 w-full h-full z-10 group-hover:scale-110 duration-300"
        />
      )}
    </HashLink>
  );
}

export default ProjectContainer;
