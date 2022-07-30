import self from "../img/self.jpeg"
import mock1 from "../img/tarjet.jpg"
import mock2 from "../img/covid.jpg"
import mock3 from "../img/climate.jpg"
import mock4 from "../img/ec.jpg"
import mock5 from "../img/KempesNFT.png"

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
            text: "Backend Developer in Key Data"
        },
        {
            emoji: '🌎',
            text: 'Córdoba, Argentina'
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
    bio: "Hello! I'm Alex. I'm a Ssr Backend Developer in Key Data. I'm twenty years old. Two years ago, during pandemic, I have studied Web Development self-taught. I am currently studying Solidity and various technologies oriented to Blockchain and Web3. Also, I'm learning English in Rosetta Stones.",
    work_experience: "I Started two years ago in Key Data as Frontend Developer with AngularJS. I learned a lot of my co-workers. I was learning for myself backend tecnlogies like PHP, Laravel and SQL. Now, I'm the developer with more time in the enterprise and I manage our servers in development and production enviroment.",
    skills:
        {
            principal : ['PHP', 'Laravel','SQL','Linux','Javascript', 'Git', 'MongoDB'],
            proficientWith: ['Python','Jetstream','Angular', 'Lumen','Vue.js', 'HTML5', 'CSS', 'Sass', 'Bootstrap', 'TailwindCSS'],
            learning: ['React.js', 'Solidity']
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
            label: 'Movies',
            emoji: '🎥'
        }
    ],
    portfolio: [
        {
            title: "MAK NFT",
            live: "https://testnets.opensea.io/assets/rinkeby/0x03ed82ce0ac8edb3fb35631ef5923b3692d9b45a/1d",
            source: "https://gist.github.com/Alexpedrasa10/5c8dd357dc2e4567316c14b78bc214de",
            image: mock5,
            description : "This is my first Token ERC721. It's a photo I take in a football match. I made it in Remix and deployed in OpenSea Rinkeby testnet.",
            items : []
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
            ]
        },
        {
            title: "Weather app",
            live: "https://github.com/Alexpedrasa10/Clima",
            source: "https://app-clima-alexpedrasa10.herokuapp.com/",
            image: mock3,
            description : "This app show the climate of any city from any country in the world in real time. Made with Angular.",
            items : []
        },
        {
            title: "Covid 19 Test",
            live: "https://pedantic-kirch-17f259.netlify.app/",
            source: "https://github.com/Alexpedrasa10/Covid",
            image: mock2,
            description : "SPA Responsive with Covid-19 test. Calculate the odds of having covid-19 from the patient's symptoms and age. And in the page 'stats', show all patients with covid-19 positive, deads and recovered in Argentina in real time. This project I made with Vue.js.",
            items : []
        },
        {
            title: "Credit Cart Form",
            live: "https://alexpedrasa10.github.io/formulario-tarjeta/", 
            source: "https://github.com/Alexpedrasa10/formulario-tarjeta", 
            image: mock1,
            description : "This is my first project, i made with only HTML5, CSS and Javascript. If the card number starts with 4, in the margin top-right show Visa's logo and if starts with 5 put the Mastercard's logo.",
            items : []
        },
    ]
}