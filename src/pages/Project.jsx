import { useEffect, useState, lazy } from "react";
import { useParams } from "react-router-dom";
import projects from "../../projects.json";
import {
  BsArrowLeft,
  BsArrowRight,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import ReactPlayer from "react-player/file";
import {
  AiFillGithub,
  AiOutlineArrowLeft,
  AiOutlineFile,
} from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function Project() {
  const { projectName } = useParams();
  const [projectData, setProjectData] = useState({});
  const [mediaData, setMediaData] = useState([]);
  const [mediaIndex, setMediaIndex] = useState(0);
  const [pdf, setPdf] = useState("");

  const next = () => {
    if (mediaIndex == 3) {
      setMediaIndex(0);
    } else {
      setMediaIndex(mediaIndex + 1);
    }
  };

  const previous = async () => {
    if (mediaIndex == 0) {
      setMediaIndex(3);
    } else {
      setMediaIndex(mediaIndex - 1);
    }
  };

  useEffect(() => {
    setProjectData(projects[projectName]);
    document.title = projects[projectName].name;

    const getMediaData = async () => {
      const allMedia = [];
      for (const i in projects[projectName].media) {
        if (projects[projectName].media[i].type === "video") {
          allMedia.push(
            await import(
              `../assets/${projectName}/${projects[projectName].media[i].fileName}.mov`
            ).then(async (video) => {
              return video.default;
            })
          );
        } else if (projects[projectName].media[i].type === "image") {
          allMedia.push(
            await import(
              `../assets/${projectName}/${projects[projectName].media[i].fileName}.png`
            ).then((image) => image.default)
          );
        } else {
          await import(
            `../assets/${projectName}/${projects[projectName].media[i].fileName}.pdf`
          ).then((image) => {
            console.log(image.default);
            setPdf(image.default);
          });
        }
      }

      setMediaData(allMedia);
    };

    getMediaData();
  }, [projectName]);

  if (!projectData?.media) {
    return (
      <div className="flex justify-center items-center pt-20">
        <div className="flex gap-2 items-center text-white min-h-[calc(100vh-16rem)]">
          <div className="loading" />
          Loading...
        </div>
      </div>
    );
  }
  return (
    <div className="w-screen pt-20 bg-blur-effect scroll-p-0">
      <div className="mt-8 mx-4 sm:mx-10">
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-0 justify-between mb-8">
          <div className="w-full sm:w-7/12">
            <div>
              <HashLink
                to="/#projects"
                className="flex gap-2 items-center text-gray-400 hover:text-white active:text-gray-500 duration-100 mb-4 max-w-max"
              >
                <AiOutlineArrowLeft /> Back to Gallery
              </HashLink>
            </div>
            <div className="flex flex-col items-center">
              {projectData.media[mediaIndex].type === "video" ? (
                <div className="mx-auto mb-4 w-full aspect-video">
                  <ReactPlayer
                    url={mediaData[mediaIndex]}
                    muted
                    controls
                    width="100%"
                    height="100%"
                    config={{
                      attributes: {
                        className: "object-cover rounded-md",
                      },
                    }}
                  />
                </div>
              ) : (
                <img
                  src={mediaData[mediaIndex]}
                  className="w-full aspect-video object-cover mb-4 mx-auto rounded-md"
                />
              )}
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={previous}
                  className="p-4 h-min rounded-full hover:bg-shaded-500 active:bg-black duration-300"
                >
                  <BsArrowLeft color="white" />
                </button>
                <div className="flex gap-4 sm:gap-8 items-center">
                  {projectData.media
                    .filter((allMedia) => allMedia.type !== "pdf")
                    .map((media, index) => (
                      <button
                        onClick={() => setMediaIndex(index)}
                        className="relative"
                      >
                        {media.type === "video" ? (
                          <>
                            <video
                              src={mediaData[index]}
                              className={`h-8 sm:h-16 aspect-video rounded-md object-cover ${
                                mediaIndex == index && "border-2 border-white"
                              }`}
                            />
                            {mediaIndex != index && (
                              <div className="absolute bg-black/50 rounded-md top-0 left-0 w-full h-full" />
                            )}
                            <BsFillPlayCircleFill className="w-4 h-4 sm:w-6 sm:h-6 text-white absolute top-[calc(50%-.5rem)] left-[calc(50%-.5rem)] sm:top-[calc(50%-.75rem)] sm:left-[calc(50%-.75rem)]" />
                          </>
                        ) : (
                          <>
                            <img
                              src={mediaData[index]}
                              className={`h-8 sm:h-16 aspect-video rounded-md object-cover ${
                                mediaIndex == index && "border-2 border-white"
                              }`}
                            />
                            {mediaIndex != index && (
                              <div className="absolute bg-black/50 rounded-md top-0 left-0 w-full h-full" />
                            )}
                          </>
                        )}
                      </button>
                    ))}
                </div>
                <button
                  onClick={next}
                  className="p-4 h-min rounded-full hover:bg-shaded-500 active:bg-black duration-300"
                >
                  <BsArrowRight color="white" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2 sm:px-8 w-full sm:w-5/12">
            {projectData.link ? (
              <div className="flex justify-between items-center w-full mb-2">
                <a
                  className="text-gray-400 hover:text-white active:text-gray-500 flex gap-1 items-center duration-100"
                  target="_blank"
                  href="https://algoblock.net"
                >
                  Visit Website <FiExternalLink className="w-5 h-5" />
                </a>
                <h6 className="text-gray-400 text-right">
                  Created: {projectData.date}
                </h6>
              </div>
            ) : (
              <h6 className="text-gray-400 text-right mb-2">
                Created: {projectData.date}
              </h6>
            )}
            <h1 className="mb-3">{projectData.name}</h1>
            <hr className="border-theme-red" />
            <p className="text-gray-300 mt-4 whitespace-pre-line">{projectData.description}</p>
            <h3 className="text-white font-medium text-xl sm:text-2xl mt-4 mb-2">
              Skills Showcased
            </h3>
            <ul className="list-disc text-gray-300 sm:text-lg space-y-1 ml-8 mb-4">
              {projectData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            {projectData.git && (
              <div className="flex flex-col gap-4 justify-center items-center">
                {pdf && (
                  <a href={pdf} target="_blank" className="w-full sm:w-auto">
                    <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl text-white red-button rounded-md px-8 py-2">
                      <AiOutlineFile
                        color="white"
                        className="text-3xl sm:text-4xl"
                      />
                      View DECA Manual
                    </div>
                  </a>
                )}
                <a
                  href={projectData.git}
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl text-white red-button rounded-md px-8 py-2">
                    <AiFillGithub
                      color="white"
                      className="text-3xl sm:text-4xl"
                    />
                    View Source Code
                    <FiExternalLink
                      color="white"
                      className="text-lg sm:text-2xl"
                    />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
