import proj1 from "./pojectimage/proj1.png"
import proj2 from "./pojectimage/proj2.png"
import proj3 from "./pojectimage/proj3.png"
import proj4 from "./pojectimage/proj4.png"
import proj5 from "./pojectimage/proj5.png"
import proj6 from "./pojectimage/proj6.png"

const projectdata = [
    {
        head: "✍️ NOTE TAKING APPLICATION",
        title: "SECRETE-NOTE",
        img: proj1,
        content: "A SecretNote is a secure note-taking website. Using email and password, it employs JWT for safe data transmission and bcrypt.js for password hashing, ensuring only authorized access to your securely stored notes",
        stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Json Web Token", "Bcrypt.js", "Express-validator"],
        git: "https://github.com/Malay207/iNotebookfrontend.git",
        deploy: "https://secrete-note.netlify.app/"
    },
    {
        head: "📦 NPM IMAGE/VIDEO OPTIMIZER PACKAGE",
        title: "@malaykumar/imageoptimizer",
        img: proj2,
        content: "@malaykumar/imageoptimizer is a Node.js tool for optimizing images and videos. Users can optimize multiple images without quality loss and adjust video quality up or down efficiently.",
        stack: ["NPM", "Esm", "Chalk", "minimist", "ffmpeg", "cloudconvert"],
        git: "https://github.com/Malay207/imageoptimizer-cli.git",
        deploy: "https://www.npmjs.com/package/@malaykumar/imageoptimizer"
    },
    {
        head: "🍿 CARD PUZZLE GAME",
        title: "EXPLOID KITTEN",
        img: proj3,
        content: "ExploidKitten is a card game where players draw from a deck of five cards. Draw all cards to win. Drawing a bomb card before a defuse card results in a loss. Drawing a shuffle card before others restarts the game with shuffled cards.",
        stack: ["React.js", "Golang", "Redis", "Redux", "Css"],
        git: "https://github.com/Malay207/ExploidKitten.git",
        deploy: "https://exploidkitten.netlify.app/"
    },
    {
        head: "💪 GOGGINS MOTIVATIONAL CHAT APP",
        title: "GOGGINS AI COACH",
        img: proj4, // Replace with your image variable
        content: "Goggins AI Coach is a motivational chat app built using Next.js, TypeScript, MongoDB, and Clerk for authentication. Inspired by David Goggins, the app provides users with tough-love motivational responses, helping them stay focused and overcome challenges. It offers personalized goal-setting, fitness advice, and mental strength coaching to drive continuous improvement.",
        stack: ["Next.js", "TypeScript", "MongoDB", "Clerk", "Tailwind CSS"],
        git: "https://github.com/Malay207/Goggins-ai_coach.git",
        deploy: "https://goggins-ai-coach-ten.vercel.app/"
    },
    {
        head: "📈 PRICE TRACKER EXTENSION",
        title: "SMART SHOPPING COMPANION",
        img: proj5, // Replace with your image variable
        content: "The Price Tracker Extension is a Chrome tool designed to help users track product prices on Amazon, Flipkart, and Ajio. Built with React.js, Puppeteer, Node.js, and MongoDB, it allows users to monitor price changes effortlessly. With secure authentication and real-time notifications, this extension enhances online shopping efficiency and ensures you never miss a deal.",
        stack: ["React.js", "Puppeteer", "Node.js", "MongoDB", "CSS"],
        git: "https://github.com/Malay207/Price-Tracker-Extention.git",
        deploy: "https://chromewebstore.google.com/detail/price-traker/kajpkjelpafpccdmmldloikackepdphd?hl=en&authuser=0"

    },
    {
        "head": "🎄 CHRISTMAS HOLIDAY WEBSITE",
        "title": "FESTIFY",
        "img": proj6,
        "content": "Festify is a Christmas-themed holiday website that brings festive joy and interactivity. Users can authenticate themselves, explore events, and create their own. The platform allows users to add events, send holiday wishes to friends, participate in the fun Secret Santa game, and share event participation links with friends to join the holiday spirit.",
        "stack": ["React.js", "Node.js", "Express.js", "MongoDB", "Json Web Token", "Clerk Authentication", "Firebase"],
        "git": "https://github.com/Malay207/Festify.git",
        "deploy": "https://festify-6mgner911-malay207s-projects.vercel.app/"
    }
];

export default projectdata;