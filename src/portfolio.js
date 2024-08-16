/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Harish's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Harish Kushwah Portfolio",
    type: "website",
    url: "http://Harishhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Harish Kushwah",
  logo_name: "Harish Kushwah",
  nickname: "Harry",
  subTitle:[
    "Web Developer",
    "Crafting innovative solutions through code",
    "I am passionate about turning ideas into reality.",
    "Code Crafter",
    "Tech Enthusiast",
    "Problem Solver",
    "Innovation Architect",
    "Software Artisan",
    "Code Alchemist",
    "Tech Explorer"
  ],
  resumeLink:
    "https://drive.google.com/file/d/1NnlLuHJPsNn3YUqvDi4qwBtcerHUR-lk/view?usp=sharing",
  portfolio_repository: "https://github.com/Harish-Kushwah/my-portfolio",
  githubProfile: "https://github.com/Harish-Kushwah",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Harish1919",
  // linkedin: "https://www.linkedin.com/in/Harish-hathidara-88710b138/",
  // gmail: "Harishhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/Harishhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/Harish_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/Harish-Kushwah",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harish-kushwah/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:harishkushwah54321@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/HarishKushwah_7",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/its_harry_7_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Desktop App Development",
      fileName: "DeskstopApp",
      skills: [
        "⚡ Focused on creating efficient and intuitive desktop applications that enhance user productivity and streamline tasks.",
        "⚡ Proficient in developing robust desktop solutions using Java, Swing, and other essential tools, tailored to meet specific user needs.",
        "⚡ Experienced in integrating powerful databases like PostgreSQL to ensure secure and efficient data management within desktop applications.",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Dedicated to building responsive and user-friendly websites that deliver seamless digital experiences",
        "⚡ Skilled in HTML, CSS, JavaScript, and backend technologies, ensuring robust and dynamic web applications.",
        "⚡ Committed to staying updated with the latest web development trends and best practices to create cutting-edge solutions.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "devicon-plain:django",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#CB3837",
          },
        }
      ],
    },
   
   
    {
      title: "Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Databases platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
      ],
      softwareSkills: [
        {
          skillName: "MySql",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/Harish-Kushwah/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/harishkushwah541",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/harishkushwah7",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/Harish-Kushwah",
    },
   
  ],
};

const degrees = {
  degrees: [
    {
      title: "Ferguson College",
      subtitle: "Master's in Computer Science",
      logo_path: "fc21.png",
      alt_name: "fergusson",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://fergusson.edu/",
    },
    {
      title: "Savitribai Phule Pune University",
      subtitle: "Bachelors in Computer Science",
      logo_path: "sppu_logo.png",
      alt_name: "Pune University",
      duration: "2021 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "http://www.unipune.ac.in/default.htm",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Web Development",
      subtitle: "- Saurabh Shukla",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://premium.mysirg.com/learn/certificate/7401054-139195",
      alt_name: "MySrig",
      color_code: "#8C151599",
    },
    {
      title: "TCS iON Career Edge-Young Professional",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/15qYGBa4KkhYed8CFlrmePeoucifUDth4/view",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Web Development Internship",
      subtitle: "- NovaNector pvt ltd",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I have worked with many evolving startups as Desktop Application Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Desktop Application Developer",
          company: "Patil Infotech.",
          company_url: "https://patilinfotech.wordpress.com/",
          logo_path: "patil_infotech.png",
          duration: "Sept 2023 - Feb 2024",
          location: "Malegaon,Nashik,India",
          description:
            "Worked on the Hospital Management desktop application.In which generating the various reports like prescription,medical certificate",
          color: "#000000",
        },
      
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web development Intern",
          company: "NovaNectar Services Pvt. Ltd",
          company_url: "https://www.novanectar.co.in/",
          logo_path: "novanector.png",
          duration: "May 2024 - Jun 2024",
          location: "Remote",
          description:
            "Wroked on various web development project",
          color: "#000000",
        },
        
      ],
    },
    
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web applications and deploy.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Research",
  description: "Some of my Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Snap Attendance",
      name: "Snap Attendance",
      createdAt: "2023-10-23",
      description: "A secure, blockchain-backed solution that combines image recognition and smart contracts to streamline attendance tracking. Enhance accuracy and transparency in various settings, from classrooms to corporate environments",
      url: "https://github.com/Harish-Kushwah/Snap-Attendance",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_Harish.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.Harishhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Anand Nagar,Kothrud,Pune,Maharashtra",
    locality: "Maharashtra",
    country: "India",
    region: "asia",
    postalCode: "423203",
    streetAddress: "pushpanagrai",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/sX3yXjx4XXVBwDFw8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
