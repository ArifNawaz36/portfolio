/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arif Nawaz",
  title: "Hi all, I'm Arif",
  subTitle: emoji(
    "Want to revolutionize your backend systems? Look no further! I am a dedicated problem-solver 🚀  with a passion for developing scalable and robust solutions. With expertise in TypeScript, Node.js, Python, and FastApi, I guarantee to make a remarkable impact. Let's embark on an incredible journey together and create something truly exceptional!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1C4c9LW3tENIUGB2wXCBkomnM62dVFsDl/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ArifNawaz36",
  linkedin: "https://www.linkedin.com/in/arif-nawaz-53863a11a/",
  gmail: "arifnawaz669@gmail.com",
  twitter: "https://twitter.com/iarifnawaz",
  instagram: "https://www.instagram.com/arifnawaz313/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "BACKEND ENGINEER, PROBLEM SOLVER, LEADER, WHO NEVER SHY AWAY FROM ANYTHING",
  skills: [
    emoji("⚡ Extensive experience in building backend systems"),
    emoji(
      "⚡ Proficient in developing scalable and robust solutions using Node.js, TypeScript, Python, FastApi, Microservices, and Serverless"
    ),
    emoji(
      "⚡ Strong knowledge of software development best practices, including agile methodologies and test-driven development"
    ),
    emoji(
      "⚡ Deep understanding of RESTful APIs (API-first) and experience in designing and implementing them effectively"
    ),
    emoji("⚡ Ability to troubleshoot and debug complex issues"),
    emoji(
      "⚡ Leading a 7-member squad to achieve project goals, and deadlines, and exceed expectations"
    ),
    emoji(
      "⚡ Team management, problem-solving, decision-making, and leadership"
    ),
    emoji("⚡ Mentoring and supporting team members")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Collaboration",
      fontAwesomeClassname: "fas fa-handshake"
    },
    {
      skillName: "Leadership",
      fontAwesomeClassname: "fas fa-users"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Peshawar, Pakistan",
      logo: require("./assets/images/UOP_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - Dec 2017",
      descBullets: [
        "Graduated with honors, specializing in algorithms, data structures, and software development.",
        "Led a team in developing an application using Hadoop and MapReduce to analyze OPD data for local healthcare organizations, resulting in increased efficiency.",
        "Ranked in the top 5% of the graduating class, showcasing exceptional aptitude and dedication in the field of Computer Science."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Node JS",
      progressPercentage: "80%"
    },
    {
      Stack: "Python",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior/Lead Software Engineer",
      company: "Netsol",
      companylogo: require("./assets/images/netsol_logo.jpeg"),
      date: "July 2022 – Present",
      descBullets: [
        "Leading a team to build the ultimate integration hub, Hubex, that streamlines access to a variety of third-party(Stripe, Plaid, Socure, Mitek) APIs on a single, unified platform to enable multiple integrations",
        "Successfully led a 7-member team to achieve project goals, and deadlines, and exceed expectations",
        "Strengthened team management, problem-solving, decision-making, and leadership skills while fostering a collaborative team environment that drove innovation and excellence",
        "Utilized an API-first strategy to streamline the design, development, testing, and distribution of APIs",
        "Implemented the payment process using Stripe and Plaid for our dealer and customer portal, enabling users to make seamless and secure credit/debit card and ACH direct debit payments",
        "Effectively communicated project vision and goals to team members, resulting in improved performance and productivity. Delegated tasks to team members, utilizing their strengths and skills",
        "Familiar with DevOps technologies such as Containerization, Docker, and Kubernetes, and currently learning to use AWS CDK to deploy serverless applications to AWS Lambda"
      ]
    },
    {
      role: "Software Engineer",
      company: "Netsol",
      companylogo: require("./assets/images/netsol_logo.jpeg"),
      date: "Oct 2019 – June 2022",
      descBullets: [
        "Conceptualized and built a groundbreaking retail solution for BMW Group one-of-its-kind in the US, live in over 50 states, which has processed over USD 6 million in transactions within the last 12 months, revolutionizing the automotive retail industry",
        "Led the implementation of a fraud check solution utilizing third-party APIs from Socure and Innovis to conduct essential KYC checks, resulting in a 90% reduction in the fraudulent data",
        "Designed, developed, and owned the pricing engine, a critical system in our application, which integrated with BMW FS to provide accurate and timely pricing calculations",
        "Collaborated in design and architecture sessions to develop new features and proactively took ownership and responsibility for the core services of the system, ensuring their stability and reliability​",
        "Developed a production-ready Chatbot for Drivemate, a leading shared mobility player in Thailand, using Google's Dialogflow and NodeJs, enabling customers to search, book, and transact car rentals in a few clicks on the bot, resulting in a 20% increase in the car rental bookings",
        "Proactively mentor and support team members, providing guidance on best practices and offering assistance as needed to ensure their professional development and success"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Hubex_logo.png"),
      projectName: "Hubex",
      projectDesc:
        "Ultimate integration-hub, ONE Integration that Enables Multiple Integrations",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hubexengine.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Mini_logo.jpeg"),
      projectName: "Digital Retail Solution",
      projectDesc:
        "Digital retail solution for BMW group, one-of-its-kind in the US",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Awards, and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Outstanding Performance Award",
      subtitle:
        "Recognized with the outstanding performance award for Q1 2021, out of a team of 50+, for exceptional contributions to both the team and the product, demonstrating a strong work ethic, attention to detail, and a commitment to delivering results.",
      image: require("./assets/images/performance_award.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "McKinsey Forward Program",
      subtitle:
        "Successfully completed the prestigious McKinsey Forward Program, a highly selective and intensive training program focused on developing critical skills such as adaptability, resilience, growth mindset, problem-solving, leadership, and communication, while working collaboratively with a diverse group of high-performing individuals.",
      image: require("./assets/images/McKinsey_&_Company_Logo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/93aec2e5-cb31-4d08-ad19-956997f0db8d/linked_in_profile"
        }
      ]
    },

    {
      title: "Cloud Native Foundations",
      subtitle:
        "Currently enrolled in a comprehensive course on cloud-native computing, microservices, and containerization. Gained hands-on experience in deploying applications using Docker and Kubernetes and learned how to design scalable, resilient, and fault-tolerant systems using cloud-native technologies.",
      image: require("./assets/images/udacity_logo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        // {name: "Certification", url: ""},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-315 3131375",
  email_address: "arifnawaz669@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
