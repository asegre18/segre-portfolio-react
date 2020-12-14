import Mock from "../mock";

const database = {
  information: {
    name: 'Andrew Segre',
    aboutContent: "I am a young, passionate Full Stack web developer utilizing a background in psychology to create a more innate user experience on the web. Recently graduated from the Full Stack UC Berkeley Extensions Coding Bootcamp, where I mastered HTML, CSS, and JavaScript with the ability to implement React.js, Node.js and many more extensions of JavaScript. Near the end of the course, I developed a knack for the backend side of web development to the point where I could build a fully functioning API with 6 end points from scratch in just a few hours. I mastered building SQL databases as well as noSQL databases using MongoDB and Mongoose.js. I am also proficient at working with a team through Github and Jira from the planning stages to the final debugging stage of a web application.",
    age: 25,
    phone: '650-703-8006',
    // nationality: 'American',
    language: 'English',
    email: 'ambsegre@gmail.com',
    address: '1220 SE 25th Ave, Portland, OR. 97214',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/andrew.segway',
      twitter: 'https://twitter.com/DudeSeg',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/andrew-segre-849164b5/',
      dribbble: '',
      github: 'https://github.com/asegre18'
    },
    brandImage: '/images/main-portfolio.png',
    aboutImage: '/images/linkedin-photo.JPG',
    aboutImageLg: '/images/linkedin-photo.JPG',
    cvfile: '/files/empty.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "I pride myself on developing an exceptional user experience by using my creativity to style the front end. I am also relentless when it comes to testing my websites, to ensure that the user experience is unparalleled"
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "I am a Full Stack web developer who specializes in back end development, but has extensize work to showcase my ability to design the a beautifully styled and functioning fornt end to go along with it."
    },
    // {
    //   title: "Mobile Application",
    //   icon: 'mobile',
    //   details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."
    // }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML",
      value: 100
    },
    {
      title: "CSS",
      value: 100
    },
    {
      title: "Javascript",
      value: 100
    },
    {
      title: "jQuery",
      value: 100
    },
    {
      title: "React.js",
      value: 100
    },
    {
      title: "Node.js",
      value: 100
    },
    {
      title: "MongoDB",
      value: 100
    },
    {
      title: "SQL",
      value: 100
    },
    {
      title: "Mongoose.js",
      value: 100
    },
    {
      title: "Socket.io",
      value: 100
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Kings Quest",
      subtitle: "A real-time card game to play with friends no matter where you are.",
      imageUrl: "/images/kings-quest-loading-screen.png",
      largeImageUrl: ["kings-quest-loading-screen.png","/images/kings-quest-login.png"],
      url: ''
    },
    {
      id: 2,
      title: "Missing Link",
      subtitle: "Web App that displays the connection between cryptocurrency and world news using Chart.js",
      imageUrl: "/images/missingLink-LOGO.png",
      largeImageUrl: ["/images/missingLink-LOGO.png","/images/missingLink.png" ],
      url: 'https://moonstripe11.github.io/proj1/'
    },
    {
      id: 3,
      title: "Passify",
      subtitle: "Web App to check how secure your account logins by searching for breaches. Includes a password generator feature. Built with React.",
      imageUrl: "/images/Passify-logo.png",
      largeImageUrl: [ "/images/Passify-logo.png", "/images/passify-main-page.png" ],
      url: 'https://passify-proj2.herokuapp.com/'
    },
    {
      id: 5,
      title: "Weather Dashboard",
      subtitle: "App to check the weather by location",
      imageUrl: "/images/weather-dashboard_sml.png",
      largeImageUrl: ["/images/weather-dashboard_lrg.png"],
      url: 'https://asegre18.github.io/hw6-weather-dashboard'
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "August - November 2020",
        position: "Digital Marketing Specialist",
        company: "Logical Position",
        details: "In charge of outbound prospecting and establishing contact with new clients through: phone and email. Averaging 65 calls/day. Hit quota 3 out of the 5 cycles there."
      },
      {
        id: 2,
        year: "May - August 2020",
        position: "Social Media Marketing Manager",
        company: "Nexgen News",
        details: "•	In charge of outbound prospecting and establishing contact with new clients through: Instagram, Facebook & LinkedIn. Consistently met or surpassed weekly quota for Nexgen News sign-ups."
      },
      {
        id: 3,
        year: "June - August 2015",
        position: "Programmer Analyst in IT department",
        company: "Wilson Sonsini Goodrich & Rosati",
        details: "Database analysis and conversion to migrate proprietary datasets to Microsoft database. Used SQL to search through data. Used VB to format data reports."
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "May - December 2020",
        graduation: "Full-Stack Web Development Bootcamp",
        university: "UC Berkeley Extensions",
        details: "6 month intensive coding bootcamp where we learned many different extensions of JavaScript and built 1 front-end App and 2 Full-stack Applications on a team on 4."
      },
      {
        id: 2,
        year: "2014 - 2019",
        graduation: "Bachelor of Arts, Psychology",
        university: "Claremont McKenna College",
        details: "Relevant Coursework: Discrete Mathematics, Data Structures & Algorithms, Web Development"
      },
      {
        id: 3,
        year: "2010 - 2014",
        graduation: "High School Diploma",
        university: "Sacred Heart Prep",
        details: "Relevant Coursework: AP Computer Science"
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: 'Markdown & Html supported blog.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/markdown-html-supported-blog.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 2,
      title: 'Installing NodeJS on your device.',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/installing-nodejs-on-your-device.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 3,
      title: 'UI/UX design starter with Adobe XD.',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 4,
      title: 'Boost your post for increasing sales.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/boost-your-post-for-increasing-sales.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 5,
      title: 'Difference between GatsbyJS & NextJS.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 6,
      title: 'How to choose javascript framework for project.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 7,
      title: 'Web automation with python language.',
      featuredImage: '/images/blog-image-7.jpg',
      filesource: '../../blog/web-automation-with-python-language.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 8,
      title: 'Time to use latest technology for creating a website.',
      featuredImage: '/images/blog-image-8.jpg',
      filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 9,
      title: 'Think out of the box.',
      featuredImage: '/images/blog-image-9.jpg',
      filesource: '../../blog/think-out-of-the-box.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 10,
      title: 'Trending designs in 2020.',
      featuredImage: '/images/blog-image-1.jpg',
      filesource: '../../blog/trending-designs-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 11,
      title: 'How to get 10k instagram followers?',
      featuredImage: '/images/blog-image-2.jpg',
      filesource: '../../blog/how-to-get-10k-instagram-followers.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 12,
      title: 'What NodeJS can do?',
      featuredImage: '/images/blog-image-3.jpg',
      filesource: '../../blog/what-nodejs-can-do.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 13,
      title: 'Futures of javascript.',
      featuredImage: '/images/blog-image-4.jpg',
      filesource: '../../blog/future-of-javascript.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 14,
      title: 'Popular javascript library in 2020.',
      featuredImage: '/images/blog-image-5.jpg',
      filesource: '../../blog/popular-javascript-library-in-2020.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    },
    {
      id: 15,
      title: 'Promrammers must read books.',
      featuredImage: '/images/blog-image-6.jpg',
      filesource: '../../blog/programmers-must-read-books.md',
      createDay: "20",
      createMonth: 'February',
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+650-703-8006'],
    emailAddress: ['ambsegre@gmail.com'],
    address: "1220 SE 25th Ave, Portland, OR. 97214"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});