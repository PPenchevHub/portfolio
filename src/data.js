
//import { FaWordpress, FaAngular, FaReact, FaDev } from "react-icons/fa";

 export const Backend = [
    {
      id: 1,
      title: "Notes",
      logo: "./assets/linkedin.png",
      description: "The backend serves as the robust foundation for a streamlined note-taking application. ",
      img:
        "./assets/notes.png",
      githubLink: "https://github.com/PPenchevHub/Notes-App-SpringBoot",
      technologies: ["Java","Postgresql", "Springboot", "JPA", "Hibernate"],
    },
    {
      id: 2,
      title: "Blog",
      logo: "./assets/linkedin.png",
      description: "An application designed to handle all CRUD operations and  manages user profiles and blog posts",
      img:
      "./assets/blog.png",
      githubLink: "https://github.com/PPenchevHub/spring-boot-blogBackend",
      technologies: ["Springboot", "Hibernate", "JPA","Spring Security","JWT", "Postgresql", "Java"],
    },
    {
      id: 3,
      title: "Full stack task tracker",
      logo: "./assets/linkedin.png",
      description: "An app with a very basic interface that handles registration and crud operations for adding and assigning tasks.",
      img:
      "./assets/blog.png",
      githubLink: "https://github.com/PPenchevHub/TaskTracker/tree/main",
      technologies: ["react", "JWT", "Nodejs","express"],
    },
   
  ];
  
  export const Frontend = [
    {
      id: 4,
      title: "Portfolio",
      logo: "./assets/linkedin.png",
      description: "Welcome to my portfolio website! Here, I proudly present a curated collection of my work, highlighting my skills, creativity, and passion for web development",
      img:
        "./assets/portfolio.png",
      githubLink: "https://github.com/PPenchevHub/portfolio",
      liveLink: "https://ppenchevhub.netlify.app/",
      technologies: ["react","sass","css"],
    },
    {
      id: 5,
      title: "Pizza and cocktails",
      logo: "./assets/linkedin.png",
      description: "This is an example",
      img:
        "./assets/pizza.png",
      githubLink: "https://github.com/",
      liveLink: "https://www.facebook.com/",
      technologies: ["css","react", "javascript"],
    },
    {
      id: 6,
      title: "Markdown notetaking app",
      logo: "./assets/linkedin.png",
      description: "This is an example",
      img:
        "./assets/mdnotes.png",
      githubLink: "https://github.com/",
      liveLink: "https://www.facebook.com/",
      technologies: ["css","react", "javascript"],
    },
   
    
  ];
  
  export const WordpressPortfolio = [
    {
      id: 7,
      title: "Festival Page",
      logo: "./assets/linkedin.png",
      description: "A page to represent a festival in the city in Berlin, where i developed the theme and some of the plugins.",
      img:
        "https://osteuropa-tage.de/wp-content/uploads/2020/09/Cover_date-1.jpg",
      liveLink: "https://osteuropa-tage.de/",
      technologies: ["wordpress", "css","javascript"],
    },
    {
      id: 8,
      title: "Staedtepartner Stettin",
      logo: "./assets/linkedin.png",
      description: "Designed and developed the website, coded most of the components from scratch and implemented with elementor.",
      img: "./assets/stettin.png",
      liveLink: "https://staedtepartner-stettin.org/",
      technologies: ["elementor","wordpress","css", "javascript", "php"],
    },
    {
      id: 9,
      title: "Natuerlich Kultur",
      logo: "./assets/linkedin.png",
      description: "Implemented a shop with a billing system and redesigned most of the components of the existing website.",
      img:
        "./assets/nkultur.png",
      liveLink: "https://natuerlich-kultur.com/",
      technologies: ["elementor","wordpress","css","javascript","php"],
    },
   
  ];
  export const AllPortfolio = [Frontend, Backend, WordpressPortfolio];
