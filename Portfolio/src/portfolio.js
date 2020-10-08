/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
    /* Your Summary And Greeting Section */
    username: "Parham Zare",
    title: "Hi all, I'm Parham",
    subTitle: emoji("A passionate Software Engineer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
    resumeLink: "https://drive.google.com/file/d/1LJmXCZG3GDLQtadliWQgY_2r4nsoMA1s/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

    github: "https://github.com/ParhamZare",
    linkedin: "https://www.linkedin.com/in/parhamzare/",
    twitter: "https://twitter.com/Parhamzaree",
    gmail: "parhamzare1@gmail.com",
    medium: "https://medium.com/@parhamzare",
    stackoverflow: "https://stackoverflow.com/users/1724681/parham-zare",

    // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji("⚡ Integration of third party services such as Firebase")
    ],

    /* Make Sure You include correct Font Awesome Classname to view your icon
    https://fontawesome.com/icons?d=gallery */

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "nodejs",
            fontAwesomeClassname: "fab fa-node"
        }, {
            skillName: "graphql",
            fontAwesomeClassname: "fab fa-graphql"
        },
        {
            skillName: "swift",
            fontAwesomeClassname: "fab fa-swift"
        },
        {
            skillName: "npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "react-native",
            fontAwesomeClassname: "fab fa-kafka"
        },
        {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "docker",
            fontAwesomeClassname: "fab fa-docker"
        }, {
            skillName: "Kafka",
            fontAwesomeClassname: "fab fa-kafka"
        }, {
            skillName: "MongoDB",
            fontAwesomeClassname: "fab fa-mongodb"
        }, {
            skillName: "NewRelic",
            fontAwesomeClassname: "fab fa-newrelic"
        }
    ]
};

// Your education background

const educationInfo = {
    viewEducation: true, // Set it to true to see education section
    schools: [
        {
            schoolName: "Shiraz Zand University",
            logo: require("./assets/images/zand.png"),
            subHeader: "Bachelor’s Degree in Computer Science",
            duration: "2013 - April 2015",
            desc: "",
            descBullets: []
        },
        {
            schoolName: "Shahid Bahonar Technical and Engineering College",
            logo: require("./assets/images/bahonar.jpg"),
            subHeader: "Associate’s Degree in Computer Science",
            duration: "2008-2010",
            desc: "",
            descBullets: []
        }
    ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [
        {
            Stack: "Frontend/Design",  //Insert stack or technology you have experience in
            progressPercentage: "70%"  //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "80%"
        },
        {
            Stack: "Programming",
            progressPercentage: "80%"
        }
    ]
};


// Your top 3 work experiences

const workExperiences = {
    viewExperiences: true, //Set it to true to show workExperiences Section
    experience: [
        {
            role: "Software engineer",
            company: "LastSecond",
            companylogo: require("./assets/images/logo__colored.png"),
            date: "Nov 2018 – Present",
            desc: "My position is to write mobile applications and web application app, manage the team and work with the Backend team to produce the API system for mobile applications\n" +
                "and web applications. I also monitor and process pull requests for production deployments.",
            descBullets: [
                "Javascript , ES6 , NodeJS , React , React-Native ,Redux , Redux-Saga , Realm , Styled-component,\n" +
                "Objective-c , Java , Enzyme , Jest , CI-CD, Kafka , Confluent , MongoDB, Debezium",
            ]
        },
        {
            role: "Senior Programmer",
            company: "FaFaIT",
            companylogo: require("./assets/images/logo_w.png"),
            date: "Jul 2014 – Feb 2018",
            desc: "My position was to develop and write an E-commerce Website. I also monitor\n" +
                "and process pull requests for production deployments.",
            descBullets: [
                "PHP , Javascript , Laravel , MySQL , MariaDB, AngularJS , Redis , Python, React , NightWatch\n" +
                "(Selenium) for E2E Testing Website"
            ]
        }, {
            role: "Software Engineer",
            company: "Juno (Spain) branch Iran Fars",
            companylogo: require("./assets/images/logo_juno.jpg"),
            date: "Jul 2014 – Feb 2018",
            desc: "My role built and maintenance the company website and accounting software",
            descBullets: [
                "PHP , Javascript , MySQL"
            ]
        },
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
    githubUserName: "parhamzare", // Change to your github username to view your profile in Contact Section.
    showGithubProfile: "true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
    title: "Big Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [
        {
            image: require("./assets/images/lastgram.webp"),
            link: "https://play.google.com/store/apps/details?id=com.lastgram&hl=en&gl=US"
        },
        {
            image: require("./assets/images/carir.webp"),
            link: "https://play.google.com/store/apps/details?id=ir.car.bilgisoft&hl=en&gl=US"
        }, {
            image: require("./assets/images/logo_w.png"),
            link: "https://fafait.net/"
        }
    ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
    viewAchievementSection: false, // Set it to true to see education section
    title: "",
    subtitle: "",

    achivementsCards: []
};

// Blogs Section

const blogSection = {

    title: "",
    subtitle: "",
    blogs: []
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE "),

    talks: [
        {
            title: "Design System",
            subtitle: "What a Design System at UXSHRIAZ Shiraz-2019 ",
            slides_url: "https://drive.google.com/file/d/11Cd1NbD0JCPZJATmrBbscfUbvqY9naSF/view?usp=sharing",
            event_url: "https://uxshiraz.org/conference/1398",
        }, {
            title: "Single Page Application",
            subtitle: "What a Single Page Application at Zand University 2015, ",
            // slides_url: "https://drive.google.com/file/d/11Cd1NbD0JCPZJATmrBbscfUbvqY9naSF/view?usp=sharing",
            // event_url: "https://uxshiraz.org/conference/1398",
        }
    ]
};

// Podcast Section

const podcastSection = {
    title: "",
    subtitle: "",
    //
    // // Please Provide with Your Podcast embeded Link
    podcast: []
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+98-9179178314",
    email_address: "parhamzare1@gmail.com"
};

//Twitter Section

const twitterDetails = {

    userName: "Parhamzaree"//Replace "twitter" with your twitter username without @

};
export {
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};
