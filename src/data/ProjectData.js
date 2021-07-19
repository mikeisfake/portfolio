export const ProjectData = [
  {
    title: "Sims Builds",
    description:
      "I used a variety of technologies and tools including Next.js, Sass, Contentful and Cloudinary to create a site to showcase my second favorite hobby: building houses in The Sims. I focused on creating a beautiful UI while maintaining a DRY codebase.",
    github: "https://github.com/mikeisfake/sims-builds",
    site: "https://simsbuilds.netlify.app/",
    image: "/projects/sims-builds.png",
    technologies: ["Next.js", "Contentful", "Cloudinary", "Sass"],
  },
  {
    title: "FILMr",
    description:
      "FILMr is a social application designed for film lovers built with Ruby on Rails. I also created totally custom styles with Sass. No CSS libraries needed. It queries a third party API to return JSON data about various films a user may search for. It then allows users to create reviews for those films and reviews written by other users. I used a ruby gem call acts-as-followers to allow users to follow each other. This is done with a polymorphic association on the backend.",
    github: "https://github.com/mikeisfake/filmr",
    video: "https://www.youtube.com/embed/se5ysRHcb_A",
    image: "/projects/filmr.png",
    technologies: ["Ruby on Rails", "jQuery", "Sass", "erb", "OMDb API"],
  },

  {
    title: "THIRTYFIVE",
    description:
      "THIRTYFIVE is an application for forgetful film lovers built using React and Redux for the frontend and Ruby on Rails for the backend. This app employs the use of a third party API to fetch data about movies as well as a custom Rails API for managing application data.",
    github: "https://github.com/mikeisfake/thirtyfive",
    video: "https://www.youtube.com/embed/plAryFUoAfM",
    image: "/projects/thirtyfive.png",
    technologies: ["React", "Redux", "CSS", "Ruby on Rails", "OMDb API"],
  },
]

// Data Structure

// {
//   title: '',
//   description: '',
//   github: '',
//   video: '',
//   site: '',
//   image: '',
//   technologies: []
// },
