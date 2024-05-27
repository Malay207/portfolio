import proj1 from "./pojectimage/proj1.png"
import proj2 from "./pojectimage/proj2.png"
import proj3 from "./pojectimage/proj3.png"

const projectdata=[
    {
        head:"✍️ NOTE TAKING APPLICATION",
        title:"SECRETE-NOTE",
        img:proj1,
        content:"A SecretNote is a secure note-taking website. Using email and password, it employs JWT for safe data transmission and bcrypt.js for password hashing, ensuring only authorized access to your securely stored notes",
        stack:["React.js","Node.js","Express.js","MongoDB","Json Web Token","Bcrypt.js","Express-validator"],
        git:"https://github.com/Malay207/iNotebookfrontend.git",
        deploy:"https://secrete-note.netlify.app/"
    },
    {
        head:"📦 NPM IMAGE/VIDEO OPTIMIZER PACKAGE",
        title:"@malaykumar/imageoptimizer",
        img:proj2,
        content:"@malaykumar/imageoptimizer is a Node.js tool for optimizing images and videos. Users can optimize multiple images without quality loss and adjust video quality up or down efficiently.",
        stack:["NPM","Esm","Chalk","minimist","ffmpeg","cloudconvert"],
        git:"https://github.com/Malay207/imageoptimizer-cli.git",
        deploy:"https://www.npmjs.com/package/@malaykumar/imageoptimizer"
    },
    {
        head:"🍿 CARD PUZZLE GAME",
        title:"EXPLOID KITTEN",
        img:proj3,
        content:"ExploidKitten is a card game where players draw from a deck of five cards. Draw all cards to win. Drawing a bomb card before a defuse card results in a loss. Drawing a shuffle card before others restarts the game with shuffled cards.",
        stack:["React.js","Golang","Redis","Redux","Css"],
        git:"https://github.com/Malay207/ExploidKitten.git",
        deploy:"https://exploidkitten.netlify.app/"
    }
];

export default projectdata;