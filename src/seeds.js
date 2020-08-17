const experiences = {
  education: [
    {
      place: "Ironhack",
      dateStart: "Mar 2020",
      dateEnd: "Jun 2020",
      title: "Full Stack Web Development Bootcamp",
      description:
        "9 weeks of a full-time intense Development Bootcamp. Mainly focused on Javascript and acquiring a MERN stack.",
      location: "Berlin, Germany",
    },
    {
      place: "Universidad Politécnica de Madrid",
      dateStart: "Jan 2014",
      dateEnd: "Jun 2014",
      title: "Student Exchange Programme",
      description:
        "6 months where I learnt to live and study in a different culture. First experience living abroad, an eye-opener.",
      location: "Madrid, Spain",
    },
    {
      place: "Instituto Tecnológico de Buenos Aires (ITBA)",
      dateStart: "Mar 2010",
      dateEnd: "Dec 2015",
      title: "Industrial Engineer",
      description:
        "5 years and lots of hours of study which shaped my mind into analyzing problems and finding solutions.",
      location: "Buenos Aires, Argentina",
    },
  ],
  work: [
    {
      place: "Adaptogenics",
      dateStart: "Oct 2018",
      dateEnd: "Mar 2020",
      title: "Co-founder",
      description:
        "Objective: Educate people about a holistic approach to their health, while delivering products accordingly. Results: 3.5k followers @ Instagram (@adaptogenics_ar) & approximately 1.000 units sold.",
      location: "Buenos Aires, Argentina",
    },
    {
      place: "Instituto Tecnológico de Buenos Aires (ITBA)",
      dateStart: "Feb 2019",
      dateEnd: "Mar 2020",
      title: 'Teacher Assistant in "Sistemas y Modelos"',
      description:
        "University subject based in analysis, modeling and basic simulation of Complex Systems (e.g. Education, Social Plans, Climate Change)",
      location: "Buenos Aires, Argentina",
    },
    {
      place: "Hakan's Café",
      dateStart: "Apr 2018",
      dateEnd: "Jul 2018",
      title: "Kitchen Assistant",
      description:
        "Worked as a Kitchen Assistant at Manly Beach during my Working Holidays in Australia",
      location: "Sydney, Australia",
    },
    {
      place: "OLX Group",
      dateStart: "May 2016",
      dateEnd: "Feb 2018",
      title: "Growth Business Analyst",
      description:
        "First as Local Analyst for Argentina (Diagnosis of main growth KPIs), then as Regional Analyst for Latin America (Strategy, KPI measurement standardisation, exposure to CEO).",
      location: "Buenos Aires, Argentina",
    },
    {
      place: "LATAM Airlines",
      dateStart: "Apr 2015",
      dateEnd: "May 2016",
      title: "Sales Analyst and Internship",
      description: "Diagnosis and analysis of LATAM flight sales in Argentina.",
      location: "Buenos Aires, Argentina",
    },
  ],
};

const skills = {
  software: [
    { skill: "Excel", stars: 4 },
    { skill: "Powerpoint", stars: 4 },
    { skill: "SQL", stars: 3 },
    { skill: "MicroStrategy", stars: 3 },
    { skill: "Javascript", stars: 3 },
    { skill: "React", stars: 3 },
    { skill: "NodeJS", stars: 3 },
    { skill: "ExpressJS", stars: 3 },
    { skill: "HTML", stars: 3 },
    { skill: "CSS", stars: 3 },
    { skill: "MongoDB", stars: 3 },
    { skill: "Angular", stars: 2 },
    { skill: "Typescript", stars: 2 },
  ],
  languages: [
    { language: "Spanish", stars: 5 },
    { language: "English", stars: 4 },
    { language: "German", stars: 1 },
  ],
};

const projects = [
  {
    title: "Kinder Class",
    description: "MVP Educational playground for kids",
    tags: ["MongoDB", "Express", "React", "Node"],
    imgUrl: "./projects/KinderClass.png",
    url: "http://kinder-class.herokuapp.com/",
  },
  {
    title: "Live Chat",
    description: "MVP Live chat",
    tags: ["Reat", "Node", "Socket.io"],
    imgUrl: "./projects/LiveChat.png",
    url: "https://manu-live-chat.herokuapp.com/",
  },
  {
    title: "Ironcook",
    description: "MVP Social network cooking website",
    tags: ["MongoDB", "Express", "Handlebars", "Node"],
    imgUrl: "./projects/Ironcook2.png",
    url: "http://ironcook.herokuapp.com/",
  },
  {
    title: "Gravity Runner",
    description: "Infinite runner space game",
    tags: ["P5", "Javascript"],
    imgUrl: "./projects/GravityRunner.png",
    url: "https://mtoscano91.github.io/Gravity-runner/",
  },
];

export { experiences, skills, projects };
