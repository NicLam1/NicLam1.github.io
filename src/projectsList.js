const importAll = (r) => r.keys().map(r);

const projects = [
  {
    id: 1,
    year: 2024,
    title: "Downtune - Web development project",
    images: importAll(require.context('./images/downtune', false, /\.(png|jpe?g|svg)$/)),
    categories: ["Mobile", "Web"],
    link: "https://downtune.netlify.app",
    stats: [
      {
        value: "Description",
        description: "Downtune is a web development project that I worked on with a team of 5 people. It is a platform that allows users to search and contact local artists for gigs and events."
      },
      {
        value: "Frameworks",
        description: "Vue.js, Bootstrap, Node.js, Firebase, Netlify"
      }
    ]
  },
  {
    id: 2,
    year: "Jan 2024 - Dec 2024",
    title: "Marketing Director - SMU SoundFoundry",
    images: importAll(require.context('./images/sf', false, /\.(png|jpe?g|svg)$/)),
    categories: ["Marketing", "Graphic Design", "Social Media"],
    link: "",
    stats: [
      {
        value: "Description",
        description: "Led a team of 3 in developing and executing marketing strategies across Instagram, TikTok, and email platforms to promote club events and initiatives. 67% increase in Instagram followers (1200-2000) over one year."
      },
      {
        value: "Skills",
        description: "Photoshop, Illustrator, Premiere Pro, Blender"
      }
    ]
  },
  {
    id: 3,
    year: "Jan 2025 - April 2025",
    title: "Dungeons End - Docker Project",
    images: importAll(require.context('./images/dungeons', false, /\.(png|jpe?g|svg)$/)),
    categories: ["Docker", "Web", "Microservice architecture"],
    link: "https://github.com/NicLam1/Dungeons_End",
    stats: [
      {
        value: "Description",
        description: "Created a text-based dungeon crawler game using Docker containers, adhearing to microservice architecture principles. Included inventory management, character stats, and combat mechanics."
      },
      {
        value: "Skills",
        description: "Docker, Python, HTML, CSS, JavaScript"
      }
    ]
  },
  {
    id: 4,
    year: "Jan 2025 - April 2025",
    title: "Passport photo maker - Java Project",
    images: importAll(require.context('./images/passport', false, /\.(png|jpe?g|svg)$/)),
    categories: ["Java", "Spring Boot"],
    link: "https://github.com/NicLam1/OOPTest",
    stats: [
      {
        value: "Description",
        description: "Created a passport photo maker using Java and Spring Boot. Allows the user to upload a photo, automatically crops and removes the background adhearing to passport photo requirements."
      },
      {
        value: "Skills",
        description: "Java, Spring Boot, Maven, U2Onxx, OpenCV"
      }
    ]
  },
  // {
  //   id: 3,
  //   year: 2023,
  //   title: "Solving Consumers Reports Declining Signup Numbers",
  //   images: ["https://placehold.co/600x400/4B0082/ffffff", "https://placehold.co/600x400/4B0082/000000"],
  //   categories: ["Mobile App"],
  //   isProtected: true,
  //   stats: [
  //     {
  //       value: "40%",
  //       description: "Increase in the adoption rate after the redesigned app experience",
  //       link: "https://www.google.com"
  //     },
  //     {
  //       value: "25%",
  //       description: "Increase in sign-up post-launch, showing strong user engagement",
  //       link: "https://www.google.com"
  //     }
  //   ]
  // },
  // {
  //   id: 4,
  //   year: 2022,
  //   title: "Digitizing Tangerines' Range of Financial Services",
  //   images: ["https://placehold.co/600x400/1a1a1a/ffffff", "https://placehold.co/600x400/1a1a1a/000000"],
  //   categories: ["Mobile", "Web", "Website", "Admin"],
  //   stats: [
  //     {
  //       value: "Over 35k",
  //       description: "Users gained within 6 months of launch",
  //       link: "https://www.google.com"
  //     },
  //     {
  //       value: "Over £4M",
  //       description: "Processed within 6 months of launch",
  //       link: "https://www.google.com"
  //     }
  //   ]
  // },
  // {
  //   id: 5,
  //   year: 2020,
  //   title: "Strategic Redesign for Enhanced Simplicity in Eyowo Mobile Finance App",
  //   images: ["https://placehold.co/600x400/4B0082/ffffff", "https://placehold.co/600x400/4B0082/000000"],
  //   categories: ["Mobile", "Web", "Website", "Admin"],
  //   stats: [
  //     {
  //       value: "65%",
  //       description: "Users expressed satisfaction with the app's experience",
  //       link: "https://www.google.com"
  //     },
  //     {
  //       value: "30%",
  //       description: "Rise in daily active users in that month following the release",
  //       link: "https://www.google.com"
  //     }
  //   ]
  // }
];

export default projects; 

function updateCarouselBackground(imageUrl) {
    const carouselBackground = document.querySelector('.carousel-background');
    if (carouselBackground) {
        carouselBackground.style.backgroundImage = `url(${imageUrl})`;
    }
}

function showImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach((img, i) => {
        img.style.display = i === index ? 'block' : 'none';
        if (i === index) {
            updateCarouselBackground(img.src);
        }
    });
}

// Call showImage with the initial index to set the first image and background
showImage(0); 