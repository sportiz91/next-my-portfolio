export default {
  menu: [
    { name: "Projects", id: "#projects", number: "01." },
    { name: "Technologies", id: "#technologies", number: "02." },
    { name: "About", id: "#about", number: "03." },
  ],
  projects: [
    {
      title: "Developer Connector",
      description:
        "Social Network for developers where you can create your own profile/portfolio, share posts and get help from other perks.",
      tags: ["Mongo", "Express", "React", "Node", "Redux", "SASS"],
      links: [
        "https://github.com/sportiz91/dev-social-mern",
        "https://cryptic-waters-23710.herokuapp.com/",
      ],
      img: "/Images/Project1.png",
    },
    {
      title: "Portfolio Website",
      description:
        "Welcome to my Portfolio Website. This is the space where I share my open-source projects and you can see how I code. Hope you like it!",
      tags: ["NEXT", "React", "Styled Components"],
      links: ["https://github.com/sportiz91/next-my-portfolio", "#!"],
      img: "/Images/Project2.png",
    },
    {
      title: "Inverfree Website",
      description:
        "Inverfree was a business I used to have a little ago. This was my first webapp created with WordPress.",
      tags: ["WordPress", "Custom CSS"],
      links: [
        "https://github.com/sportiz91/next-my-portfolio",
        "https://inverfree.com",
      ],
      img: "/Images/Project3.png",
    },
  ],

  other: [
    {
      title: "Hackernews Reader",
      description:
        "Get the latest news from Hackernews API. Stay up to date with the latest tech news!",
      github: "https://github.com/sportiz91/hackernews-newsreader",
      source: "https://hackernews-newsreader.vercel.app/",
      tags: ["React", "API", "React Testing", "JEST"],
    },
    {
      title: "Weather App",
      description:
        "This App was made in order to practice my 'hitting api' skills. Easy peacy!",
      github: "https://github.com/sportiz91/weather-app-react",
      source: "https://weather-app-react-rho.vercel.app/",
      tags: ["React", "Weather API"],
    },
    {
      title: "Mike Smith's Portfolio",
      description:
        "A single page web app for helping Mike showcase his experience and projects done",
      github: "https://github.com/sportiz91/portfolio-app-react-router",
      source: "https://portfolio-app-react-router.vercel.app/",
      tags: ["React", "React Router", "SASS"],
    },
    {
      title: "TinDog Website",
      description:
        "One of the first Apps I've ever done. This taught me a lot of Bootstrap and core concepts of web developing",
      github: "https://github.com/sportiz91/TinDog-website",
      source: "https://tin-dog-website-sportiz91.vercel.app/",
      tags: ["Vanilla JS", "CSS", "Bootstrap"],
    },
    {
      title: "Beautiful TodoApp",
      description:
        "This beautiful TodoApp taught me a lot of CSS and JavaScript. Beautiful transitions, effects and drag & drop!",
      github: "https://github.com/sportiz91/Todo-App-Frontend-Mentor",
      source: "https://todo-app-frontend-mentor-sigma.vercel.app/",
      tags: ["Vanilla JS", "CSS"],
    },
  ],

  timeline: [
    { year: "2013", description: "Graduated - Bachelor in Economics" },
    {
      year: "2014",
      description: "Worked as trader/financial analyst",
    },
    { year: "2016", description: "Graduated - Master in Finance" },
    {
      year: "2018",
      description:
        "Started working as independent financial advisor / personal brand & business",
    },
    {
      year: "2020",
      description: "Created my first ever website with WordPress",
    },
    { year: "2020", description: "Started my Full Stack & MERN Journey" },
  ],

  tech: [
    {
      front: [
        { name: "HTML" },
        {
          name: "CSS",
        },
        {
          name: "JavaScript",
        },

        {
          name: "React",
        },
        {
          name: "NEXT",
        },
        {
          name: "Redux",
        },
        {
          name: "Bootstrap",
        },
        {
          name: "jQuery",
        },
        {
          name: "SASS",
        },
        {
          name: "Styled Comp.",
        },
      ],
    },
    {
      back: [
        {
          name: "Node.js",
        },
        {
          name: "MongoDB",
        },
        {
          name: "Solidity",
        },
      ],
    },
    {
      devops: [
        {
          name: "Heroku",
          img: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjNDMwMDk4IiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+SGVyb2t1IGljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMC42MSAwSDMuMzlDMi4xODkgMCAxLjIzLjk2IDEuMjMgMi4xNnYxOS42ODFjMCAxLjE5OC45NTkgMi4xNTkgMi4xNiAyLjE1OWgxNy4yMmMxLjIgMCAyLjE1OS0uOTYxIDIuMTU5LTIuMTU5VjIuMTZDMjIuNzcuOTYgMjEuODExIDAgMjAuNjEgMHptLjk2IDIxLjg0MWMwIC41MzktLjQyMS45Ni0uOTYuOTZIMy4zOWMtLjU0IDAtLjk2LS40MjEtLjk2LS45NlYyLjE2YzAtLjU0LjQyLS45NjEuOTYtLjk2MWgxNy4yMmMuNTM5IDAgLjk2LjQyMS45Ni45NjF2MTkuNjgxek02LjYzIDIwLjM5OUw5LjMzIDE4bC0yLjctMi40djQuNzk5em05LjcyLTkuNzE5Yy0uNDc5LS40OC0xLjM3OS0xLjA4LTIuODc5LTEuMDgtMS42MjEgMC0zLjMwMS40MjEtNC41Ljg0VjMuNmgtMi40djEwLjM4bDEuNjgtLjc4czIuNzYtMS4yNiA1LjE2LTEuMjZjMS4yIDAgMS41LjY2IDEuNSAxLjI2djcuMmgyLjR2LTcuMmMuMDU5LS4xNzkuMDU5LTEuNTAxLS45NjEtMi41MnpNMTMuMTcgNy41aDIuNGMxLjA4LTEuMjYgMS42Mi0yLjUyMSAxLjgtMy45aC0yLjM5OWMtLjI0MSAxLjM3OS0uODQxIDIuNjQtMS44MDEgMy45eiIvPjwvc3ZnPg==",
        },
        {
          name: "Vercel",
        },
        {
          name: "Git",
          img: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRjA1MDMyIiByb2xlPSJpbWciIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R2l0IGljb248L3RpdGxlPjxwYXRoIGQ9Ik0yMy41NDYgMTAuOTNMMTMuMDY3LjQ1MmMtLjYwNC0uNjAzLTEuNTgyLS42MDMtMi4xODggMEw4LjcwOCAyLjYyN2wyLjc2IDIuNzZjLjY0NS0uMjE1IDEuMzc5LS4wNyAxLjg4OS40NDEuNTE2LjUxNS42NTggMS4yNTguNDM4IDEuOWwyLjY1OCAyLjY2Yy42NDUtLjIyMyAxLjM4Ny0uMDc4IDEuOS40MzUuNzIxLjcyLjcyMSAxLjg4NCAwIDIuNjA0LS43MTkuNzE5LTEuODgxLjcxOS0yLjYgMC0uNTM5LS41NDEtLjY3NC0xLjMzNy0uNDA0LTEuOTk2TDEyLjg2IDguOTU1djYuNTI1Yy4xNzYuMDg2LjM0Mi4yMDMuNDg4LjM0OC43MTMuNzIxLjcxMyAxLjg4MyAwIDIuNi0uNzE5LjcyMS0xLjg4OS43MjEtMi42MDkgMC0uNzE5LS43MTktLjcxOS0xLjg3OSAwLTIuNTk4LjE4Mi0uMTguMzg3LS4zMTYuNjA1LS40MDZWOC44MzVjLS4yMTctLjA5MS0uNDI0LS4yMjItLjYtLjQwMS0uNTQ1LS41NDUtLjY3Ni0xLjM0Mi0uMzk2LTIuMDA5TDcuNjM2IDMuNy40NSAxMC44ODFjLS42LjYwNS0uNiAxLjU4NCAwIDIuMTg5bDEwLjQ4IDEwLjQ3N2MuNjA0LjYwNCAxLjU4Mi42MDQgMi4xODYgMGwxMC40My0xMC40M2MuNjA1LS42MDMuNjA1LTEuNTgyIDAtMi4xODciLz48L3N2Zz4=",
        },
        {
          name: "VS Code",
          img: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSJub25lIiB2aWV3Qm94PSIwIDAgMjU2IDI1NiI+PG1hc2sgaWQ9Im1hc2swIiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeD0iMCIgeT0iMCIgbWFzay10eXBlPSJhbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTgxLjUzNCAyNTQuMjUyQzE4NS41NjYgMjU1LjgyMyAxOTAuMTY0IDI1NS43MjIgMTk0LjIzNCAyNTMuNzY0TDI0Ni45NCAyMjguNDAzQzI1Mi40NzggMjI1LjczOCAyNTYgMjIwLjEzMiAyNTYgMjEzLjk4M1Y0Mi4wMTgxQzI1NiAzNS44Njg5IDI1Mi40NzggMzAuMjYzOCAyNDYuOTQgMjcuNTk4OEwxOTQuMjM0IDIuMjM2ODFDMTg4Ljg5MyAtMC4zMzMxMzIgMTgyLjY0MiAwLjI5NjM0NCAxNzcuOTU1IDMuNzA0MThDMTc3LjI4NSA0LjE5MSAxNzYuNjQ3IDQuNzM0NTQgMTc2LjA0OSA1LjMzMzU0TDc1LjE0OSA5Ny4zODYyTDMxLjE5OTIgNjQuMDI0N0MyNy4xMDc5IDYwLjkxOTEgMjEuMzg1MyA2MS4xNzM1IDE3LjU4NTUgNjQuNjNMMy40ODkzNiA3Ny40NTI1Qy0xLjE1ODUzIDgxLjY4MDUgLTEuMTYzODYgODguOTkyNiAzLjQ3Nzg1IDkzLjIyNzRMNDEuNTkyNiAxMjhMMy40Nzc4NSAxNjIuNzczQy0xLjE2Mzg2IDE2Ny4wMDggLTEuMTU4NTMgMTc0LjMyIDMuNDg5MzYgMTc4LjU0OEwxNy41ODU1IDE5MS4zN0MyMS4zODUzIDE5NC44MjcgMjcuMTA3OSAxOTUuMDgxIDMxLjE5OTIgMTkxLjk3Nkw3NS4xNDkgMTU4LjYxNEwxNzYuMDQ5IDI1MC42NjdDMTc3LjY0NSAyNTIuMjY0IDE3OS41MTkgMjUzLjQ2NyAxODEuNTM0IDI1NC4yNTJaTTE5Mi4wMzkgNjkuODg1M0wxMTUuNDc5IDEyOEwxOTIuMDM5IDE4Ni4xMTVWNjkuODg1M1oiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI21hc2swKSI+PHBhdGggZmlsbD0iIzAwNjVBOSIgZD0iTTI0Ni45NCAyNy42MzgzTDE5NC4xOTMgMi4yNDEzOEMxODguMDg4IC0wLjY5ODMwMiAxODAuNzkxIDAuNTQxNzIxIDE3NS45OTkgNS4zMzMzMkwzLjMyMzcxIDE2Mi43NzNDLTEuMzIwODIgMTY3LjAwOCAtMS4zMTU0OCAxNzQuMzIgMy4zMzUyMyAxNzguNTQ4TDE3LjQzOTkgMTkxLjM3QzIxLjI0MjEgMTk0LjgyNyAyNi45NjgyIDE5NS4wODEgMzEuMDYxOSAxOTEuOTc2TDIzOS4wMDMgMzQuMjI2OUMyNDUuOTc5IDI4LjkzNDcgMjU1Ljk5OSAzMy45MTAzIDI1NS45OTkgNDIuNjY2N1Y0Mi4wNTQzQzI1NS45OTkgMzUuOTA3OCAyNTIuNDc4IDMwLjMwNDcgMjQ2Ljk0IDI3LjYzODNaIi8+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjBfZCkiPjxwYXRoIGZpbGw9IiMwMDdBQ0MiIGQ9Ik0yNDYuOTQgMjI4LjM2MkwxOTQuMTkzIDI1My43NTlDMTg4LjA4OCAyNTYuNjk4IDE4MC43OTEgMjU1LjQ1OCAxNzUuOTk5IDI1MC42NjdMMy4zMjM3MSA5My4yMjcyQy0xLjMyMDgyIDg4Ljk5MjUgLTEuMzE1NDggODEuNjgwMiAzLjMzNTIzIDc3LjQ1MjNMMTcuNDM5OSA2NC42Mjk4QzIxLjI0MjEgNjEuMTczMyAyNi45NjgyIDYwLjkxODggMzEuMDYxOSA2NC4wMjQ1TDIzOS4wMDMgMjIxLjc3M0MyNDUuOTc5IDIyNy4wNjUgMjU1Ljk5OSAyMjIuMDkgMjU1Ljk5OSAyMTMuMzMzVjIxMy45NDZDMjU1Ljk5OSAyMjAuMDkyIDI1Mi40NzggMjI1LjY5NSAyNDYuOTQgMjI4LjM2MloiLz48L2c+PGcgZmlsdGVyPSJ1cmwoI2ZpbHRlcjFfZCkiPjxwYXRoIGZpbGw9IiMxRjlDRjAiIGQ9Ik0xOTQuMTk2IDI1My43NjNDMTg4LjA4OSAyNTYuNyAxODAuNzkyIDI1NS40NTkgMTc2IDI1MC42NjdDMTgxLjkwNCAyNTYuNTcxIDE5MiAyNTIuMzg5IDE5MiAyNDQuMDM5VjExLjk2MDZDMTkyIDMuNjEwNTcgMTgxLjkwNCAtMC41NzExNzUgMTc2IDUuMzMzMjFDMTgwLjc5MiAwLjU0MTE2NiAxODguMDg5IC0wLjcwMDYwNyAxOTQuMTk2IDIuMjM2NDhMMjQ2LjkzNCAyNy41OTg1QzI1Mi40NzYgMzAuMjYzNSAyNTYgMzUuODY4NiAyNTYgNDIuMDE3OFYyMTMuOTgzQzI1NiAyMjAuMTMyIDI1Mi40NzYgMjI1LjczNyAyNDYuOTM0IDIyOC40MDJMMTk0LjE5NiAyNTMuNzYzWiIvPjwvZz48ZyBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6b3ZlcmxheSIgb3BhY2l0eT0iLjI1Ij48cGF0aCBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xODEuMzc4IDI1NC4yNTJDMTg1LjQxIDI1NS44MjIgMTkwLjAwOCAyNTUuNzIyIDE5NC4wNzcgMjUzLjc2NEwyNDYuNzgzIDIyOC40MDJDMjUyLjMyMiAyMjUuNzM3IDI1NS44NDQgMjIwLjEzMiAyNTUuODQ0IDIxMy45ODNWNDIuMDE3OUMyNTUuODQ0IDM1Ljg2ODcgMjUyLjMyMiAzMC4yNjM2IDI0Ni43ODQgMjcuNTk4NkwxOTQuMDc3IDIuMjM2NjVDMTg4LjczNyAtMC4zMzMyOTkgMTgyLjQ4NiAwLjI5NjE3NyAxNzcuNzk4IDMuNzA0MDFDMTc3LjEyOSA0LjE5MDgzIDE3Ni40OTEgNC43MzQzNyAxNzUuODkyIDUuMzMzMzdMNzQuOTkyNyA5Ny4zODZMMzEuMDQyOSA2NC4wMjQ1QzI2Ljk1MTcgNjAuOTE4OSAyMS4yMjkgNjEuMTczNCAxNy40MjkyIDY0LjYyOThMMy4zMzMxMSA3Ny40NTIzQy0xLjMxNDc4IDgxLjY4MDMgLTEuMzIwMTEgODguOTkyNSAzLjMyMTYgOTMuMjI3M0w0MS40MzY0IDEyOEwzLjMyMTYgMTYyLjc3M0MtMS4zMjAxMSAxNjcuMDA4IC0xLjMxNDc4IDE3NC4zMiAzLjMzMzExIDE3OC41NDhMMTcuNDI5MiAxOTEuMzdDMjEuMjI5IDE5NC44MjcgMjYuOTUxNyAxOTUuMDgxIDMxLjA0MjkgMTkxLjk3Nkw3NC45OTI3IDE1OC42MTRMMTc1Ljg5MiAyNTAuNjY3QzE3Ny40ODggMjUyLjI2NCAxNzkuMzYzIDI1My40NjcgMTgxLjM3OCAyNTQuMjUyWk0xOTEuODgzIDY5Ljg4NTFMMTE1LjMyMyAxMjhMMTkxLjg4MyAxODYuMTE1VjY5Ljg4NTFaIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9nPjxkZWZzPjxmaWx0ZXIgaWQ9ImZpbHRlcjBfZCIgd2lkdGg9IjI5OC44MjIiIGhlaWdodD0iMjM2LjE0OSIgeD0iLTIxLjQ5IiB5PSI0MC41MjMiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0Lz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC42NjciLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIG1vZGU9Im92ZXJsYXkiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiBtb2RlPSJub3JtYWwiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48ZmlsdGVyIGlkPSJmaWx0ZXIxX2QiIHdpZHRoPSIxMjIuNjY3IiBoZWlnaHQ9IjI5Ny4zNDciIHg9IjE1NC42NjciIHk9Ii0yMC42NzQiIGNvbG9yLWludGVycG9sYXRpb24tZmlsdGVycz0ic1JHQiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIi8+PGZlT2Zmc2V0Lz48ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMC42NjciLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4yNSAwIi8+PGZlQmxlbmQgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIG1vZGU9Im92ZXJsYXkiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93Ii8+PGZlQmxlbmQgaW49IlNvdXJjZUdyYXBoaWMiIGluMj0iZWZmZWN0MV9kcm9wU2hhZG93IiBtb2RlPSJub3JtYWwiIHJlc3VsdD0ic2hhcGUiLz48L2ZpbHRlcj48bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxMjcuODQ0IiB4Mj0iMTI3Ljg0NCIgeTE9Ii42NiIgeTI9IjI1NS4zNCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIHN0b3AtY29sb3I9IiNmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjwvc3ZnPg==",
        },
        {
          name: "WordPress",
        },
      ],
    },
  ],
};
