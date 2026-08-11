/**
 * ============================================================
 *  PORTFOLIO DATA — the ONLY file you should need to touch
 *  to update content. No component code needs to change.
 * ============================================================
 *
 *  HOW TO EDIT:
 *  - Replace empty strings "" with real values as you get them.
 *  - Empty social links are automatically hidden.
 *  - Empty arrays render an elegant "empty state" instead of
 *    breaking the layout, per your instructions never to
 *    invent projects, publications, experience, or awards.
 *  - Images: drop files into /public/images or /public/projects
 *    and point to them, e.g. "images/profile.jpg".
 */

window.PORTFOLIO_DATA = {
  /* ---------------- IDENTITY ---------------- */
  name: "Jahidul Islam Jony",
  role: "CS Undergrad || ML & AI Enthusiast",
  focus: "Machine Learning · Natural Language Processing · Computer Vision",
  tagline:
    "Undergraduate CSE student, Passionate about building a foundation across Machine Learning, Computer Vision, Natural Language Processing, Digital Image processing and Multimodal Systems. — building intelligent solutions that create meaningful impact.",

  // Path to profile photo. Leave "" to show a placeholder frame.
  avatar: "assets/Jony.jpg",

  // Path to resume/CV PDF. Leave "" to hide the download button.
  resume: "",

  // Public email shown in Contact + used for the mailto fallback.
  email: "jahiduljony60@gmail.com",

  /* ---------------- SOCIAL LINKS ----------------
     Leave any value "" and that icon disappears automatically. */
  socials: {
    github: "https://github.com/theTerminatorrr",
    linkedin: "https://www.linkedin.com/in/terminator-t60/",
    facebook: "https://www.facebook.com/Jony.terminator",
    instagram: "https://www.instagram.com/__.the_terminator.__",
    scholar: "",
    orcid: ""
  },

  /* ---------------- CONTACT FORM ----------------
     This is a static site with no server. To receive messages,
     sign up for a free form backend (e.g. Formspree, Web3Forms)
     and paste the endpoint URL below. Until then, the form falls
     back to opening the visitor's email client (mailto). */
  contactEndpoint: "",

  /* ---------------- ABOUT ---------------- */
  about: [
    "I'm an undergraduate Computer Science and Engineering student at United International University (UIU), Bangladesh, working toward a future in research and technology.",
    "I'm drawn to problems at the edge of perception and language — computer vision, NLP, and multimodal machine learning — and I like understanding systems from first principles before I build with them.",
    "Right now I'm deepening my foundations in Python, C, C++, and Java while exploring machine learning, deep learning, digital image processing, and cloud computing through hands-on projects.",
    "Long term, I want to contribute to science and technology through research and innovation — work that outlives the demo and actually moves a field forward.",
    "I learn best in the open: reading papers, breaking code on purpose, and building things with people who know more than I do."
  ],

  /* ---------------- SKILLS ---------------- */skills: [
  {
    group: "Programming Languages",
    items: [
      { name: "Python",  icon: "devicon-python-plain colored" },
      { name: "Java",    icon: "devicon-java-plain colored" },
      { name: "C++",     icon: "devicon-cplusplus-plain colored" },
      { name: "C",       icon: "devicon-c-plain colored" },
      { name: "HTML",    icon: "devicon-html5-plain colored" },
      { name: "CSS",     icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      /* { name: "TypeScript",   icon: "devicon-typescript-plain colored" },
      { name: "SQL",     icon: "devicon-mysql-plain colored" },
      { name: "Rust",    icon: "devicon-rust-plain colored" }, */
    ]
  },
  
  {
    group: "Frontend",
    items: [
      { name: "React",      icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    ]
  },
  
  {
    group: "Backend",
    items: [
      { name: "Node.js",    icon: "devicon-nodejs-plain colored" },
      /* { name: "Express.js", icon: "devicon-express-original colored" },
      { name: "Django",     icon: "devicon-django-plain colored" }, */
    ]
  },


  {
    group: "Tools",
    items: [
      { name: "Git",        icon: "devicon-git-plain colored" },
      { name: "Figma",     icon: "devicon-figma-plain colored" },
      { name: "VS Code",    icon: "devicon-vscode-plain colored" },
      { name: "Jupyter",    icon: "devicon-jupyter-plain colored" },
      { name: "PyCharm",    icon: "devicon-pycharm-plain colored" },
    ]
  },

  {
    group: "AI / ML Focus",
    items: [
      { name: "Machine Learning",           icon: "emoji", emoji: "🤖" },
      { name: "Natural Language Processing", icon: "emoji", emoji: "💬" },
      { name: "Digital Image Processing",   icon: "emoji", emoji: "🖼️" },
      { name: "Computer Vision",            icon:  "emoji", emoji: "🔎" },
    ]
  },
  {
    group: "Currently Exploring",
    items: [
      { name: "Cloud Computing",       icon: "emoji", emoji: "☁️" },
      { name: "Multimodal Machine Learning", icon: "emoji", emoji: "🔗" },
      { name: "Applied AI Engineering", icon: "emoji", emoji: "⚙️" }
    ]
  }
],


 
  /* ---------------- EXPERIENCE ----------------
     Empty on purpose — add entries as they happen. Each item:
     { role, org, period, description, current } */
  experience: [],
 
  /* ---------------- PROJECTS ----------------
     Empty on purpose. Each item:
     { title, description, image, stack: [], github, link, category, featured } */
  projects: [
    {
      title: "Heart Disease Detection",
      description:
        "An interactive logistic regression classifier that estimates cardiac risk from patient data, paired with a simple web interface for entering values and viewing the prediction.",
      image: "",
      stack: ["Python", "Logistic Regression", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/theTerminatorrr/Heart-Disease-Detection-",
      link: "",
      category: "Machine Learning",
      featured: true
    }
  ],
 

  /* ---------------- RESEARCH ----------------
     Research interests are real; publications are intentionally
     empty until there are real ones to list. */
  researchInterests: [
    { name: "Machine Learning", icon: "emoji", emoji: "🤖" },
    { name: "Deep Learning", icon: "emoji", emoji: "🧠" },
    { name: "Natural Language Processing", icon: "emoji", emoji: "💬" },
    { name: "Computer Vision", icon: "emoji", emoji: "🔍" },
    { name: "Multimodal Machine Learning", icon: "emoji", emoji: "🔗" },
    { name: "Digital Image Processing", icon: "emoji", emoji: "🖼️" },
    { name: "Artificial Intelligence", icon: "emoji", emoji: "✨" }
  ],
  publications: [


  ],
 
 
  /* ---------------- EDUCATION ---------------- */
  education: [
    {
      degree: "B.Sc. in Computer Science and Engineering",
      institute: "United International University (UIU), Bangladesh",
      detail: "Currently pursuing",
      current: true
    },

    {
      degree: "Higher Secondary Certificate (HSC), Science",
      institute: "Principal Kazi Faruky School & College",
      detail: "Completed 2022",
      current: false
    },

    {
      degree: "Secondary School Certificate (SSC), Science",
      institute: "Principal Kazi Faruky School & College",
      detail: "Completed 2020",
      current: false
    }
  ],
 
  /* ---------------- ACHIEVEMENTS ----------------
     Empty on purpose — awards, hackathons, certificates go here. */
  achievements: []
};
 