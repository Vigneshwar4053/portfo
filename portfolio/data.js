/* Portfolio content — edit this file to update the site.
   index.html reads everything below; no HTML edits needed.

   Layer "fit" modes:
     "cover"   — full-bleed background (default)
     "contain" — whole transparent canvas stays visible on every screen
     "bottom"  — bottom-anchored strip (terrain / foreground cutouts)
     "left"    — left-anchored, full height (desktop; contained on mobile)
     "right"   — right-anchored, full height (desktop; contained on mobile) */

const PORTFOLIO_DATA = {
  owner: "Vigneshwar",
  role: "Game Developer · Designer · Problem Solver",

  nav: [
    { label: "Home", href: "#home" },
    { label: "About me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact me", href: "#contact" }
  ],

  hero: {
    titleTop: "Enter The",
    titleBottom: "Dragon",
    cta: { label: "Explore", href: "#about" },
    images: {
      forest:    { src: "./images/tree.webp",       alt: "Forest landscape" },
      birdLeft:  { src: "./images/Left_Bird.webp",  alt: "Bird flying to the left",  fit: "contain" },
      birdRight: { src: "./images/Right_Bird.webp", alt: "Bird flying to the right", fit: "contain" },
      boat:      { src: "./images/Boat.webp",       alt: "Boat drifting on the water" },
      rocks:     { src: "./images/base.webp",       alt: "Rocky shoreline" }
    }
  },

  sections: {
    about: {
      subtitle: "A little bit",
      title: "About Me",
      paragraphs: [
        "Hey! I'm <span>Vigneshwar</span>, a passionate Game Developer, Designer, and Problem Solver who loves transforming ideas into immersive digital experiences.",
        "From creating cinematic Unreal Engine environments to building innovative web applications and AI-powered solutions, I enjoy blending creativity with technology.",
        "My goal is simple — create experiences that people remember."
      ],
      signature: "Vigneshwar",
      layers: [
        { src: "./images/sky.webp",      cls: "layer layer1 fit-cover",   alt: "" },
        { src: "./images/bg.webp",       cls: "layer layer2 fit-bottom",  alt: "" },
        { src: "./images/aboutme.webp", cls: "layer layer3 fit-bottom",  alt: "" }
      ]
    },

    skills: {
      glow: true,
      layers: [
        { src: "./images/landscpe_view.webp",   cls: "layer layer1 fit-cover",   alt: "" },
        { src: "./images/flying_mountain2.webp", cls: "layer layer2 fit-contain", alt: "" },
        { src: "./images/flying_mountain.webp",  cls: "layer layer3 fit-contain", alt: "" },
        { src: "./images/me_in_boat.webp",       cls: "layer layer4 fit-bottom",  alt: "" },
        { src: "./images/sk.webp",               cls: "layer layer5",             alt: "" }
      ]
    },

    projects: {
      title: "Projects",
      intro: "",
      items: [
        { 
          title: "Freelance Software Developer", 
          description: "July 2025 – Present<br>• Engineered and deployed a scalable full-stack e-commerce application handling 1,000+ simulated concurrent transactions.<br>• Implemented resilient user authentication mechanisms using JWT and bcrypt.<br>• Automated functional and regression test suites using Selenium WebDriver.", 
          tags: ["MERN", "Microsoft Azure", "Selenium"], 
          link: "" 
        },
        { 
          title: "Autonomous Web-Search Agent & Conversational AI", 
          description: "2025<br>• Fine-tuned an open-source GPT-2 model via Hugging Face on customized dialogue datasets.<br>• Architected an end-to-end RAG pipeline utilizing ChromaDB for dense vector indexing.<br>• Engineered dynamic tool-calling functionality for autonomous internet queries.", 
          tags: ["GPT-2", "Hugging Face", "ChromaDB", "Python", "Linux"], 
          link: "" 
        },
        { 
          title: "Whatsthat – Vision-Language Assistive System", 
          description: "April 2025 – May 2025<br>• Built a real-time computer vision inference engine utilizing YOLOv8s fine-tuned on the COCO dataset.<br>• Orchestrated multimodal integration with LLaMA 3 to generate low-latency scene descriptions.<br>• Packaged the pipeline as modular FastAPI microservices.", 
          tags: ["YOLOv8s", "LLaMA 3", "FastAPI"], 
          link: "https://github.com/Vigneshwar4053/whatsthat" 
        },
        { 
          title: "JuryMate – Repository AI Evaluator", 
          description: "Jan 2025 – Feb 2025<br>• Designed an automated hackathon evaluation agent that reduced jury code-review overhead by 50%.<br>• Constructed summarization pipelines converting repo architecture into briefing audio transcripts.", 
          tags: ["Open-Source LLMs", "React", "Node.js"], 
          link: "https://github.com/Vigneshwar4053/jury_mate" 
        }
      ],
      layers: [
        { src: "./images/sky.webp", cls: "layer layer1 fit-cover", alt: "" },
      ]
    },

    contact: {
      title: "Contact Me",
      intro: "",
      email: "sametithirumanivigneshwar@gmail.com",
      socials: [
        { label: "LinkedIn", url:"https://www.linkedin.com/in/sameti-thirumani-vigneshwar"},
        { label: "GitHub", url: "https://github.com/Vigneshwar4053" }
      ],
      layers: [
        { src: "./images/sky.webp",      cls: "layer layer1 fit-cover",  alt: "" },
        { src: "./images/light_house.webp", cls: "layer layer2 fit-right", alt: "" },
        { src: "./images/standing_on_rock.webp", cls: "layer layer2 fit-left", alt: "" },
      ]
    }
  }
};
