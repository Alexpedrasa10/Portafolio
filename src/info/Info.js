import self from "../img/self.jpeg"
import mock1 from "../img/tarjet.jpg"
import mock2 from "../img/covid.jpg"
import mock3 from "../img/climate.jpg"
import mock4 from "../img/ec.jpg"
import mock5 from "../img/KempesNFT.png"
import mock6 from "../img/goapi.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

//export let colors = ["#4286f4", "#373B44"];
export let colors = ["#ED213A", "#93291E"];

/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Alex",
    lastName: "Pedrasa",
    initials: "PHP", // the example uses first and last, but feel free to use three or more if you like.
    position: "SSr Backend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: "💼",
            text: "Backend Developer at Key Data"
        },
        {
            emoji: '🌎',
            text: 'Córdoba, Argentina 🇦🇷'
        },
        {
            emoji: "📧",
            text: "alexpedasa10@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/Alexpedrasa10",
            icon: "fa fa-github"
        },
        {
            link: "https://www.linkedin.com/in/alex-pedrasa-5103441a5/",
            icon: "fa fa-linkedin"
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I’m a self-taught backend developer specializing in building scalable and robust solutions. Since 2020, I’ve delved into web technologies, combining curiosity with the ability to solve complex problems. At Key Data, I apply my skills to optimize systems and work with international clients.",
    work_experience: "My career began in October 2020 at Key Data as a Frontend Developer (AngularJS), before transitioning to backend development with PHP Laravel. Over time, I expanded my expertise in database management and server administration, eventually leading my team by 2023, resolving critical production issues. I later joined South Hive as an Ssr Backend Developer, where I contributed to Córdoba's municipal tax and financial systems, creating new features and migrating projects to the cloud. Currently, I'm back at Key Data, managing multiple projects—primarily a healthcare-focused initiative in Colombia—and contributing to an AI-driven project.",
    skills:
        {
            principal : ['PHP', 'Laravel','Javascript', 'Linux'],
            database : ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
            cloud : ['AWS', 'DigitalOcean'],
            frontend : ['HTML', 'CSS', 'Angular', 'Vue.js', 'React.js', 'TailwindCSS'],
            proficientWith: ['Python', 'Golang', 'NodeJs', 'Docker'],
        }
    ,
    hobbies: [
        {
            label: 'Football',
            emoji: '⚽'
        },
        {
            label: 'Programming',
            emoji: '💻'
        },
        {
            label: 'Music',
            emoji: '🎵'
        }
    ],
    portfolio: [
        {
            title: "Clients API",
            source: "https://github.com/Alexpedrasa10/goclients",
            image: mock6,
            description : "CRUD Clients with Golang, SQLite and Docker.",
            items : [],
            technologies : ['Golang', 'SQLite', 'Docker']
        },
        {
            title: "MAK NFT",
            live: "https://testnets.opensea.io/assets/rinkeby/0x03ed82ce0ac8edb3fb35631ef5923b3692d9b45a/1/",
            source: "https://gist.github.com/Alexpedrasa10/5c8dd357dc2e4567316c14b78bc214de",
            image: mock5,
            description : "This is my first Token ERC721. It's a photo I take in a football match. I made it in Remix and deployed in OpenSea Rinkeby testnet.",
            items : [],
            technologies : ['Golang', 'SQLite', 'Docker']
        },
        {
            title: "E-Commerce",
            live: "http://ecommerce-ap10.herokuapp.com/dashboard",
            source: "https://github.com/Alexpedrasa10/EC",
            image: mock4,
            description : "Ecommerce made it with Laravel Jetstream, an full-stack framework. I Started this project for get experience with PHP and Jetstream because in my job we are working in a new project with this tecnologies. It's not finished. (Not work in live demo because the database host is not free)",
            items:[
                "Admin user can delete, add and edit products.",
                "In Product edit, can associate the product with others and assing categories",
                "Use MercadoPago, Paypal and Bitcoin (Lightning Network) as payment gateway",
                "For Paypal method, use an API to convert ARS to USD in the price of usd 'blue' in real time",
                "Bitcoin payment is suspended because error with Buda API",
                "Integrate DropBox",
                "Full Responsive",
                "Login with Facebook and Google (Laravel Socialite)",
            ],
            technologies : ['PHP', 'Laravel', 'MySQL', 'Javascript','TailwindCSS','HTML', 'CSS']
        },
        {
            title: "Weather app",
            live: "https://app-clima-alexpedrasa10.herokuapp.com/",
            source: "https://github.com/Alexpedrasa10/Clima",
            image: mock3,
            description : "This app show the climate of any city from any country in the world in real time. Made with Angular.",
            items : [],
            technologies : ['HTML', 'CSS', 'Javascript', 'Vue.js']
        },
        {
            title: "Covid 19 Test",
            live: "https://pedantic-kirch-17f259.netlify.app/",
            source: "https://github.com/Alexpedrasa10/Covid",
            image: mock2,
            description : "SPA Responsive with Covid-19 test. Calculate the odds of having covid-19 from the patient's symptoms and age. And in the page 'stats', show all patients with covid-19 positive, deads and recovered in Argentina in real time. This project I made with Vue.js.",
            items : [],
            technologies : ['HTML', 'CSS', 'Javascript', 'Vue.js']
        },
        {
            title: "Credit Cart Form",
            live: "https://alexpedrasa10.github.io/formulario-tarjeta/", 
            source: "https://github.com/Alexpedrasa10/formulario-tarjeta", 
            image: mock1,
            description : "This is my first project, i made with only HTML5, CSS and Javascript. If the card number starts with 4, in the margin top-right show Visa's logo and if starts with 5 put the Mastercard's logo.",
            items : [],
            technologies : ['HTML', 'CSS', 'Javascript']
        },
    ]
}