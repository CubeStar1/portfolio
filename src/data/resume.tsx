import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Avinash Anish",
  initials: "AA",
  url: "https://thecubestar.com",
  location: "Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/Bangalore",
  description:
  "3rd Semester Computer Science - Cybersecurity Student at RV College of Engineering",
    
  summary:
    "I am a Computer Science student at R.V College of Engineering, specializing in Cybersecurity. I have a strong interest in AI/ML projects and large language models (LLMs), with hands-on experience in developing practical solutions using these technologies.",
  avatarUrl: "/thecubestar.webp",
  skills: [
    "Python",
    "C",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "shadcn/ui",
    "TensorFlow",
    "Streamlit",
    "FastAPI",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "avinash.anish05@gmail.com",
    tel: "+918296152559",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CubeStar1",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/avinash-anish-2509b22a8/",
        icon: Icons.linkedin,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1eawY6cj2xjcU-oz7rSIqDFaQjxjPE8kl/view?usp=sharing",
        icon: Icons.file,
        navbar: true,
      },
    },
  },

  education: [
    {
      school: "R.V College of Engineering",
      href: "https://rvce.edu.in",
      degree: "B.E in Computer Science - Cybersecurity",
      logoUrl: "/rv-logo.jpeg",
      start: "2023",
      end: "Present",
      description: "CGPA: 9.78",
    },
    {
      school: "Shri Ram Global",
      href: "https://srgsbangalore.com/",
      degree: "12th CBSE",
      logoUrl: "/srgs-logo.jpg",
      start: "2023",
      end: "2021",
      description: "Score: 95.6%",
    },
    {
      school: "National Centre for Excellence",
      href: "https://www.ncfe.ac.in/",
      degree: "10th CBSE",
      logoUrl: "/ncfe-logo.jpeg",
      start: "2008",
      end: "2021",
      description: "Score: 98%",
    },
  ],
  projects: [
    {
      title: "Health Monitor AI",
      href: "https://github.com/CubeStar1/health-monitor-next",
      dates: "September 2024",
      active: true,
      description:
        "Developed a comprehensive health monitoring application with real-time monitoring, activity tracking, and nutrition logging. Integrated Arduino sensors to display live health metrics and implemented an AI-powered health assistant using OpenAI, Gemini, and Langchain.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "FastAPI",
        "Python",
        "Supabase",
        "Langchain",
        "OpenAI",
        "Cohere",
        "Arduino",
        "ESP8266",
        "Recharts",
        "Vercel"
      ],
      image: "/health-monitor-landing.jpg",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/health-monitor-next",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://health-monitor-next.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "ReviewQuery AI",
      href: "https://github.com/CubeStar1/amazon-reviews-chatbot",
      dates: "September 2024",
      active: true,
      description:
        "Developed a chatbot application that allows users to interact with Amazon review data using natural language. The system scrapes Amazon reviews, converts natural language queries to SQL, and provides real-time query results. It features a Next.js frontend, FastAPI backend for database operations, and a Flask server for web scraping.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "FastAPI",
        "Flask",
        "Python",
        "Supabase",
        "Langchain",
        "OpenAI",
        "Vercel"
      ],
      image: "/reviewquery-ai-landing-light.jpg",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/amazon-reviews-chatbot",
          icon: <Icons.github className="size-3" />,
        },
        // {
        //   type: "Demo",
        //   href: "https://amazon-review-chatbot-next.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
    },
    {
      title: "EasySQL",
      href: "https://github.com/CubeStar1/text-to-sql",
      dates: "September 2024",
      active: true,
      description:
        "Developed an application that converts natural language input into SQL queries, executes them and display the results along with a summary of the results. It features a Next.js frontend with Tailwind CSS and Shadcn/UI components, and a FastAPI backend for database operations and OpenAI-powered text-to-SQL conversion. The system supports real-time query execution and result display, with options for both real and mock database connections.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "FastAPI",
        "Python",
        "Supabase",
        "OpenAI",
        "Vercel"
      ],
      image: "/easysql-chat.png",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/text-to-sql",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://easy-sql.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "KCET-Scraper",
      href: "https://github.com/CubeStar1/kcet-scraper",
      dates: "August 2024",
      active: true,
      description:
        "Developed a Next.js website for scraping and presenting KCET counselling results. Features include quick access to 2023 and 2024 results, searching by rank, CET number, or college code, and a user-friendly interface for fast lookups. Utilizes Python playwright for web scraping, Supabase for data storage, and server-side rendering for improved performance.",
      technologies: [
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Python",
        "Playwright",
        "BeautifulSoup",
        "Supabase",
        "Vercel",
      ],
      image: "/kcet-scraper-landing.jpg",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/kcet-scraper",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://kcet-scraper.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Quantum Chat",
      href: "https://github.com/CubeStar1/QuantumChat",
      dates: "March 2024",
      active: true,
      description:
        "Developed a secure chat system using Quantum Key Distribution (QKD) for cryptographic key generation and hybrid encryption with RSA and AES. Implemented real-time chat with WebSockets and simulated quantum key generation using FastAPI and Qiskit.",
      technologies: [
        "Svelte",
        "TypeScript",
        "FastAPI",
        "Qiskit",
        "WebSockets",
        "IndexedDB",
      ],
      image: "/quantum-chat-landing.jpg",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/QuantumChat",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://quantum-chat.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "LoadPredictor",
      href: "https://github.com/CubeStar1/LoadPredictor",
      dates: "January 2024",
      active: true,
      description:
        "Developed an LSTM model for short-term load forecasting in power grids, predicting electricity demand 24 hours into the future. Implemented a Streamlit app for data visualization and achieved high accuracy with an RMSE less than 1%.",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Streamlit",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Scikit-learn",
        "BeautifulSoup",
        "Jupyter Notebook",
      ],
      image: "/load-predictor-landing.jpg",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/LoadPredictor",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://loadpredictor.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "ChemPredictor",
      href: "https://github.com/CubeStar1/ChemPredictor",
      dates: "December 2023",
      active: true,
      description:
        "Created a web interface using Streamlit to predict thermodynamic properties of molecules using an Artificial Neural Network (ANN). Integrated Gemini Pro LLM for providing additional insights on predicted properties and compounds.",
      technologies: [
        "Streamlit",
        "TensorFlow",
        "Python",
        "Gemini Pro API",
      ],
      image: "/chempredictor-landing.jpg",
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CubeStar1/chem-predictor",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Demo",
          href: "https://chempredictor.streamlit.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
  hackathons: [
    {
      title: "HPCC Systems Hackathon - FindMySafeHaven",
      dates: "March 2024",
      location: "Online",
      description:
        "Achieved 1st place in the hackathon with around 30 teams. Developed a platform to help travelers stay informed about the safety of their surroundings by analyzing social factors like poverty, unemployment, and education.",
      image: "/hpcc-systems-hackathon.png",
      win: "1st Place Winner",
      links: [
        {
          title: "Project Link",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://github.com/CubeStar1/HPCC-Hackathon-2024-FindMySafeHaven",
        },
      ],
    },
  ],
  hobbies: [
    {
      name: "Speedcubing",
      icon: Icons.cube,
      description: "Solving Rubik's cubes and other twisty puzzles as quickly as possible. I've been competing since 2016 and have attended 18 official competitions.",
      link: {
        url: "https://www.worldcubeassociation.org/persons/2016ANIS01",
        text: "WCA Profile"
      }
    },
    {
      name: "Long Distance Running",
      icon: Icons.run,
      description: "",
      link: {
        url: "https://www.strava.com/athletes/44891398",
        text: "Strava"
      }
    },
    {
      name: "Cycling",
      icon: Icons.bike,
      description: "",
      link: {
        url: "https://www.strava.com/athletes/44891398",
        text: "Strava"
      }
    },
  ],
} as const;