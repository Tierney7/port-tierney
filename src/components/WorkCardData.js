import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";
import pro4 from "../assets/project4.png";

const ProjectCardData = [
    {
        imgsrc: pro3,
        title: "Weather Dashboard",
        text: "Weather application utilizing the openweather API, bootstrap, and java script to log and call on the API city weather information, and display for the user.",
        view: "https://tierney7.github.io/tierney-weather/",
        source: "https://github.com/Tierney7/tierney-weather",
      
    },

    {
        imgsrc: pro2,
        title: "Seared (group)",
        text: "Seared is a web app designed to help with deciding what to eat for dinner. This project has pushed our knowledge of Handlebars as well as working with cookies.",
        view: "https://seared-project-2.herokuapp.com/",
        source: "https://github.com/johnathanmann/Seared",
    },

    {
        imgsrc: pro1,
        title: "Daily Work Scheduler",
        text: "Calendar application that allows a user to save events for each hour of the day. This app features dynamically updated HTML and CSS powered by jQuery.",
        view: "https://tierney7.github.io/dailyworkschedule/",
        source:"https://github.com/Tierney7/dailyworkschedule",
    },
    
    {
        imgsrc: pro4,
        title: "Note Taker",
        text: "Note Taker application that can be used to write and save notes. This application uses an Express.js back end which saves and retrieves note data from a JSON file.",
        view: "https://tierney7.github.io/mjt-note/",
        source: "https://github.com/Tierney7/mjt-note",
    }
    ];

    export default ProjectCardData;

