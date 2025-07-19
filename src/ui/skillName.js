import {
    SiHtml5,
    SiJavascript,
    SiCss3,
    SiTailwindcss,
    SiExpress,
    SiPhp,
    SiMongodb,
    SiCplusplus,
    SiVite,
    SiJquery,
  } from "react-icons/si";
  import { RiNextjsFill } from 'react-icons/ri';
  import { FaBootstrap, FaReact, FaGithub } from "react-icons/fa";
  import { TbBrandVscode, TbBrandFramerMotion  } from "react-icons/tb";
  import { LiaNodeJs } from "react-icons/lia";

const skills = [
    {
      id: 1,
      value: "languages",
      skillName: "Languages",
      icons: [
        { color: "#00599c", name: "C++", iconName: SiCplusplus },
        { color: "#E7C952", name: "JavaScript", iconName: SiJavascript },
      ],
    },
    {
      id: 2,
      value: "frontend",
      skillName: "Frontend",
      icons: [
        { color: "#F7B552", name: "HTML5", iconName: SiHtml5 },
        { color: "#6DAEFF", name: "CSS3", iconName: SiCss3 },
        { color: "#30E2E9", name: "React", iconName: FaReact },
        { color: "#9102B9", name: "Bootstrap", iconName: FaBootstrap },       
        { color: "#EC9A1F", name: "Vite", iconName: SiVite },
        { color: "#208BD8", name: "jQuery", iconName: SiJquery },
        { color: "#15A9E7", name: "Tailwind CSS", iconName: SiTailwindcss },
        { color : "yellow", name: "Framer Motion", iconName: TbBrandFramerMotion}
      ],
    },
    {
      id: 3,
      value: "backend",
      skillName: "Backend",
      icons: [
        { color: "#6698F8", name: "Express", iconName: SiExpress },
        { color: "#209411", name: "NodeJS", iconName: LiaNodeJs },
        { color: "#B140EE", name: "PHP", iconName: SiPhp },
        {color : 'gray', name : "Next.js", iconName : RiNextjsFill
        }
      ],
    },
    {
      id: 4,
      value: "database",
      skillName: "Databases",
      icons: [{ color: "#0AA41C", name: "MongoDB", iconName: SiMongodb }],
    },
    {
      id: 5,
      value: "versionControl",
      skillName: "Version Control",
      icons: [
        { color: "white", name: "Github", iconName: FaGithub },
        { color: "#095AF2", name: "VS Code", iconName: TbBrandVscode },
      ],
    },
    
  ];

  export default skills