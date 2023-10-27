import Luke from "../assets/Luke.png";
import ProjectGallery from "../components/ProjectGallery";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";

function Home() {
  document.title = "Home";

  return (
    <div className="w-screen pt-20 bg-blur-effect">
      <section
        id="welcome"
        className="flex flex-col sm:flex-row mt-4 sm:mt-0 px-4 sm:px-20"
      >
        <article className="w-full sm:w-[calc(50%-3rem)] flex flex-col justify-center px-6">
          <h2>Hey, I'm</h2>
          <h1>Luke Anderson</h1>
          <div className="w-40 h-1 bg-theme-red mb-4" />
          <p>
            I'm a senior at King Philip Regional High School, and a self-taught
            computer developer. I am able to work in Python, C#, Java,
            JavaScript, and various development frameworks to create
            production-grade work for clients with front-end and back-end web
            development.
          </p>
        </article>
        <article className="w-full sm:w-1/2 h-full flex justify-center sm:justify-end">
          <div className="bg-theme-gray-600 w-[80%] mt-[10%] aspect-square rounded-full right-0 my-auto">
            <img src={Luke} className="h-full m-auto" />
          </div>
        </article>
      </section>

      <div className="bg-theme-gray-400 mx-10 sm:mx-40 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-around items-center px-4 sm:px-10 py-4 relative">
        <a
          href="https://www.linkedin.com/in/luke-anderson-189514237/"
          target="_blank"
          className="w-full sm:w-auto"
        >
          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl text-white red-button rounded-md px-8 py-2">
            <BsLinkedin color="white" className="text-2xl sm:text-4xl" />{" "}
            LinkedIn
          </div>
        </a>
        <a
          href="https://github.com/LukeA25"
          target="_blank"
          className="w-full sm:w-auto"
        >
          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl text-white red-button rounded-md px-8 py-2">
            <AiFillGithub color="white" className="text-2xl sm:text-4xl" />{" "}
            GitHub
          </div>
        </a>
        <a
          href="mailto:luke1chip@gmail.com"
          target="_blank"
          className="w-full sm:w-auto"
        >
          <div className="flex items-center justify-center gap-2 text-lg sm:text-2xl text-white red-button rounded-md px-8 py-2">
            <AiOutlineMail color="white" className="text-2xl sm:text-4xl" />{" "}
            Luke1chip@gmail.com
          </div>
        </a>
      </div>

      <section
        id="projects"
        className="pt-28 px-8 sm:p-28 -mt-24 sm:-mt-10 bg-theme-gray-700"
      >
        <h1>My Projects</h1>
        <ProjectGallery />
      </section>

      <section id="about" className="p-8 sm:px-32 sm:py-16">
        <h1>About Me</h1>
        <p>
          Although I am still a high school student, I do not let this deter me
          from pursuing my goal of becoming a software engineer. I have five
          years of relevant experience in coding and computer engineering. My
          personal website illustrates a collection of my favorite projects that
          I created over the last two years. This sampling of websites, school
          projects, personal projects, and my first company demonstrates my
          versatility. My desire to learn is complimented by my relentless work
          ethic. In addition to web development, I am a varsity athlete and am
          seeking roles and resources which merge technology and business.
        </p>
      </section>
    </div>
  );
}

export default Home;
