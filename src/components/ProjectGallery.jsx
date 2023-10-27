import ProjectContainer from "./ProjectContainer";
import AlgoBlockLogo from "../assets/algoblock/1.png";
import SpiderVideo from "../assets/spider_robot/Spider Robot.mov";
import CVVideo from "../assets/computer_vision_workout/CV Video.mov";
import SVPVideo from "../assets/svp_demo/SVP Demo Video.mov";
import EnvisionARVideo from "../assets/envision_ar_demo/Envision AR Demo.mov";
import IdeaVideo from "../assets/i.d.e.a._vr_demo/IDEA VR Video.mov";
import SlaughterhouseVideo from "../assets/slaughterhouse_5_game/Slaughterhouse 5 Video.mov";
import ProblemStartVideo from "../assets/problemstart/ProblemStart CapCut.mov";

function ProjectGallery() {
  return (
    <div className="w-full mx-auto grid gap-8 grid-cols-1 sm:grid-cols-3 mt-4 sm:mt-8 pb-8 sm:pb-0">
      <ProjectContainer
        name="AlgoBlock"
        category="entrepreneurship"
        src={AlgoBlockLogo}
      />
      <ProjectContainer
        name="Spider Robot"
        category="personalProject"
        videoSrc={SpiderVideo}
      />
      <ProjectContainer
        name="ProblemStart"
        category="freelance"
        videoSrc={ProblemStartVideo}
      />
      <ProjectContainer
        name="Computer Vision Workout"
        category="personalProject"
        videoSrc={CVVideo}
      />
      <ProjectContainer
        name="SVP Demo"
        category="freelance"
        videoSrc={SVPVideo}
      />
      <ProjectContainer
        name="Envision AR Demo"
        category="school"
        videoSrc={EnvisionARVideo}
      />
      <ProjectContainer
        name="I.D.E.A. VR Demo"
        category="school"
        videoSrc={IdeaVideo}
      />
      <ProjectContainer
        name="Slaughterhouse 5 Game"
        category="school"
        videoSrc={SlaughterhouseVideo}
      />
    </div>
  );
}

export default ProjectGallery;
