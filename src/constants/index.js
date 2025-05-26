const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Cloud Service",
    link: "#experience",
  },

  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Project On Going" },
  { value: 32, suffix: "+", label: "Satisfied Clients" },
  { value: 48, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  // {
  //   imgPath: "/images/logos/company-logo-4.png",
  // },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
 ];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality First",
    desc: "We craft every project with precision, ensuring top-notch quality in every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clear Communication",
    desc: "You’re always in the loop — no surprises, just honest and open updates.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely Delivery",
    desc: "Deadlines matter. We deliver on time, every time — without cutting corners.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    imgPath: "/images/code1.gif",
    logoPath: "/images/logo1.png",
    title: "Web Development",
    responsibilities: [
      "Custom Builds – WordPress, Webflow, SHopify, etc or fully coded to fit your needs.",
      "Performance-Driven – Fast, mobile-friendly, and SEO-optimized.",
      "Seamless Experience – Looks perfect on all screens and browsers.",
    ],
  },
  {
    imgPath: "/images/marketing.gif",
    logoPath: "/images/logo2.png",
    title: "Marketing",
    responsibilities: [
      "Data-Driven Media – Uses analytics to run smarter, targeted campaigns.",
      "Tech-Focused – Leverages new tech to boost digital presence.",
      "Creative Solutions – Delivers innovative, cloud-based branding and marketing.",
    ],
  },
  {
    imgPath: "/images/graphic.gif",
    logoPath: "/images/logo3.png",
    title: "Graphic Design",
    responsibilities: [
      "Brand-Focused Designs – Visually align every graphic with your brand’s identity.",
      "Creative Storytelling – Communicate ideas clearly through stunning visuals.",
      "Multi-Platform Ready – Designs optimized for web, social media, and print.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Pankaj Singh",
    // mentions: "@estherhoward",
    review:
      "Great website designer Full support for websites issue",
    imgPath: "/images/client1.png",
  },
 
  {
    name: "Nandhil Agency",
    // mentions: "@guyhawkins",
    review:
      "I owned influencer marketing agency, Nandhil often needs website development, branding, and digital marketing support. Startenza is our go-to cloud-based marketing agency—creative, reliable, and always delivers top-notch results!",
    imgPath: "/images/client2.png",
  },
  
  {
    name: "Nadeem",
    // mentions: "@floydmiles",
    review:
    "Startenza helped me quickly when I was stuck with website development for my other business. Great support and expert web development services!",
    imgPath: "/images/client4.png",
  },
  
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/startenza.h/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/profile.php?id=61565106797089",
    imgPath: "/images/fb.png",
  },
  // {
  //   name: "x",
  //   imgPath: "/images/x.png",
  // },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/company/startenza/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
