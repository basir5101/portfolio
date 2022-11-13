import { AtSign, Facebook, GitHub, Linkedin, PhoneCall } from "react-feather"

export const projectDetails = [
    {
        id: 0,
        image: '/0.jpg',
        name: 'Apps Factory',
        tech: ['tailwind', 'next.js', ,],
        github: 'https://github.com/basir5101',
        live: "https://www.appsfactory.dev/"
    },
    {
        id: 1,
        image: '/1.jpg',
        name: 'Calculate meal',
        tech: ['tailwind', 'next.js', 'strapi', 'node.js',],
        github: 'https://github.com/basir5101/meal-ui',
        live: 'https://meal-ui.vercel.app/',
    },
    {
        id: 2,
        image: '/2.jpg',
        name: 'Red Onion',
        tech: ['react', 'bootstrap', 'node.js',],
        github: 'https://github.com/basir5101/red-onioon/',
        live: 'https://red-onioon.web.app/',
    },
    {
        id: 3,
        image: '/3.jpg',
        name: 'Volunteer Network',
        tech: ['bootstrap', 'react', 'firebase', 'node.js'],
        github: 'https://github.com/basir5101/volunteer-network-client/',
        live: 'https://valuneer-network.web.app/',
    },
    {
        id: 4,
        image: '/4.jpg',
        name: 'Travel Guru',
        tech: ['bootstrap', 'react', 'firebase'],
        github: 'https://github.com/basir5101/travel-guru/',
        live: 'https://travel-guru-awesome.web.app/',
    },
    {
        id: 5,
        image: '/5.jpg',
        name: 'Learn Physics',
        tech: ['bootstrap', 'react', 'JavaScript'],
        github: 'https://github.com/basir5101/physics-bangladesh/',
        live: 'https://physics-bd.netlify.app/',
    },
    {
        id: 6,
        image: '/6.jpg',
        name: 'Life In Text',
        tech: ['bootstrap', 'next.js', 'strapi'],
        github: 'https://github.com/basir5101/',
        live: 'https://www.lifeintext.com/',
    },
    {
        id: 7,
        image: '/7.jpg',
        name: 'E-School',
        tech: ['html5', 'css3', 'JavaScript',],
        github: 'https://github.com/basir5101/e-school/',
        live: 'https://basir5101.github.io/e-school/',
    },
]

export const blogDetails = [
    {
        id: 1,
        img: '/a.png',
        title: 'The 10 Topics of JavaScript you should know in 2020',
        link: "https://medium.com/@basir.bsmrstu/the-10-topics-of-javascript-you-should-know-in-2020-a169185dfb28",
        des: "somThe list we are going to learn… 1. Variable (var, let) and const 2. For loop 3. Data types.....thing"
    },
    {
        id: 1,
        img: '/b.png',
        title: '10 Topics from ES6 you should know to be a web developer',
        link: "https://basir-bsmrstu.medium.com/10-topics-from-es6-you-should-know-to-a-web-developer-daf2aa8a54c6",
        des: "1.Var Declaration and Hoisting: what is hoisting? when we declare any variable or function name....."
    },
    {
        id: 1,
        img: '/c.png',
        title: '10 React Fundamental Concept You Should Know',
        link: "https://basir-bsmrstu.medium.com/10-react-fundamental-concept-you-should-know-c54fde8d900c",
        des: "React is a JavaScript library. We can make single page application with react so easily. With react....."
    },
    {
        id: 1,
        img: '/d.png',
        title: '10 JavaScript Array Methods You Should Know',
        link: "https://basir-bsmrstu.medium.com/10-javascript-methods-you-should-know-fbcf1eb285fe",
        des: "Array is one of the most important thing in JavaScript. Without array you cannot imagine JavaScript. Array is...."
    },
]

export const completedProjects = [
    {
        title: 'React',
        count: 50,
    },
    {
        title: 'Next.js',
        count: 15,
    },
    {
        title: 'React-native',
        count: 5,
    },

]

export const skills = [
    {
        title: 'HTML5',
        count: 80,
    },
    {
        title: 'CSS3',
        count: 78,
    },
    {
        title: 'Bootstrap',
        count: 90,
    },
    {
        title: 'Tailwind css',
        count: 95,
    },
    {
        title: 'MUI',
        count: 75,
    },
    {
        title: 'JavaScript',
        count: 75,
    },
    {
        title: 'React.js',
        count: 85,
    },
    {
        title: 'Redux',
        count: 75,
    },
    {
        title: 'Framer Motion',
        count: 75,
    },
    {
        title: 'Firebase',
        count: 40,
    },
    {
        title: 'Next.js',
        count: 90,
    },
    {
        title: 'Node.js',
        count: 40,
    },
    {
        title: 'Express.js',
        count: 35,
    },

]

export const contactDetails = [
    {
        title: 'LinkedIn',
        link: "https://www.linkedin.com/in/abdul-basir-b087971b1/",
        component: <Linkedin />,
    },
    {
        title: 'Github',
        link: "https://github.com/basir5101",
        component: <GitHub />,
    },
    {
        title: 'Email',
        link: "basir.bsmrstu@gmail.com",
        component: <AtSign />,
    },
    {
        title: 'Facebook',
        link: "https://www.facebook.com/basir5101",
        component: <Facebook />
    },
    {
        title: 'Phone',
        link: "+8801774066225",
        component: <PhoneCall />
    },
]