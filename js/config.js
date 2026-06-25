/**
 * ============================================================
 *  EDIT YOUR INFO HERE — nowhere else.
 *  Change anything in this file, save, commit, push — the
 *  live site updates. Nobody viewing the site sees old values
 *  or a history of your edits; they only ever see what's here.
 * ============================================================
 */

window.PORTFOLIO_DATA = {

  // ---- Identity -------------------------------------------------
  name: "Jahidul Islam Jony",
  role: "Computer Science & Engineering Undergraduate",
  focus: "Machine Learning · Natural Language Processing · Computer Vision ",
  location: "Dhaka, Bangladesh",

  // Path to your photo. Drop a new image into /assets and change
  // this path. Square images (e.g. 600x600) work best.
  //avatar: "assets/rsz_img_6261.png",
  avatar : "assets/rsz_img_20260508_042202.jpg",
  // ---- Hero -------------------------------------------------------
  tagline:
    "Undergraduate CSE student, building a foundation across Machine Learning, Computer Vision, Natural Language Processing, and multimodal systems.",

  // ---- About --------------------------------------------------------
  about: [
    "I'm an undergraduate CSE student at United International University, currently building a foundation across machine learning, natural language processing, digital image processing, computer vision, and multimodal ML.",
    "My day-to-day toolkit spans Python, Java, C++, and C. I like turning coursework into working code — projects, experiments, and the occasional rabbit hole — and I'm slowly growing into cloud computing and applied AI engineering alongside it.",
    "I'm early in my career and treating that as an advantage: room to explore widely before specializing. If you're working on something interesting in AI, ML, or software more broadly, I'd like to hear about it."
  ],

  // ---- Skills ---------------------------------------------------------
  // Add, remove, or rename groups freely. Each group renders as its
  // own cluster of tags.
skills: [
  {
    group: "Languages",
    items: [
      { name: "Python",  icon: "devicon-python-plain colored" },
      { name: "Java",    icon: "devicon-java-plain colored" },
      { name: "C++",     icon: "devicon-cplusplus-plain colored" },
      { name: "C",       icon: "devicon-c-plain colored" }
    ]
  },
  {
    group: "AI / ML Focus",
    items: [
      { name: "Machine Learning",           icon: "emoji", emoji: "🤖" },
      { name: "Natural Language Processing", icon: "emoji", emoji: "💬" },
      { name: "Digital Image Processing",   icon: "emoji", emoji: "🖼️" },
      { name: "Computer Vision",            icon: "devicon-opencv-plain colored" },
      { name: "Multimodal Machine Learning", icon: "emoji", emoji: "🔗" }
    ]
  },
  {
    group: "Currently Exploring",
    items: [
      { name: "Cloud Computing",       icon: "emoji", emoji: "☁️" },
      { name: "Applied AI Engineering", icon: "emoji", emoji: "⚙️" }
    ]
  }
],
  // ---- Projects --------------------------------------------------------
  // {
  //   title: "Project Name",
  //   description: "One or two sentences on what it does and why it exists.",
  //   stack: ["Python", "PyTorch", "OpenCV"],
  //   link: "https://github.com/theTerminatorrr/your-repo"
  // }
  projects: [
   {
    title: "CardioSense",
    description: "Every heartbeat carries a pattern. I trained a model to read it. This model is an interactive logistic regression classifier to estimate cardiac risk.",
    stack: ["Python", "Logistic Regression", "K-Nearest Neighbors"],
    link: "https://theterminatorrr.github.io/Heart-Disease-Detection-/"
  }
],

  // ---- Education --------------------------------------------------------
  // Ordered newest first. `current: true` adds an "in progress" badge.
  education: [
    {
      degree: "B.Sc. in Computer Science & Engineering (CSE)",
      institute: "United International University (UIU)",
      detail: "Sep 2023 – Expected Jun 2028",
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

  // ---- Contact & socials --------------------------------------------------------
  email: "jahiduljony60@gmail.com",
  socials: { 
    github: "https://github.com/theTerminatorrr",
    linkedin: "https://www.linkedin.com/in/terminator-t60/",
    facebook: "https://www.facebook.com/Jony.terminator",
    instagram: "https://www.instagram.com/__.the_terminator.__"
  }
};
