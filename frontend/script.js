const projects = [
    {
        imgSrc: "../assets/dillar.png",
        title: "Dillar Academy",
        description: "A web app for a nonprofit organization that provides free English lessons to Uyghurs.",
        link: "https://dillaracademy.vercel.app/",
        github: "https://github.com/JumboCode/dillar-academy"
    },
    {
        imgSrc: "../assets/puka-holdings.png",
        title: "Puka Holdings",
        description: "A simple website for a fictional investment company.",
        link: "https://jpuka01.github.io/Puka-Holdings/pages/home.html",
        github: "https://github.com/jpuka01/Puka-Holdings"
    },
    {
        imgSrc: "../assets/cocktail.png",
        title: "Cocktail Recipes",
        description: "A web app that provides a list of cocktails and their recipes using an API.",
        link: "https://jpuka01.github.io/cocktails/cocktail.html",
        github: "https://github.com/jpuka01/cocktails"
    },
    {
        imgSrc: "../assets/bos.png",
        title: "'Bos in Boston",
        description: "A fictional travel agency website for Tufts students offering tours of Boston.",
        link: "https://jpuka01.github.io/cs20-midterm/pages/index.html",
        github: "https://github.com/jpuka01/cs20-midterm"
    },
    {
        imgSrc: "../assets/gdt.png",
        title: "Game Deals Tracker",
        description: "Provides a real-time game deal for discovering deals, discounts, and offers.",
        link: "https://jpuka01.github.io/game-deals-tracker/index.html",
        github: "https://github.com/jpuka01/game-deals-tracker"
    },
    {
        imgSrc: "../assets/faf.png",
        title: "Find a Friend",
        description: "A research project on a friend web app that uses LLMs to generate and create matches based on Q&A and chat history.",
        link: "https://github.com/jpuka01/find-a-friend/tree/main",
        github: "https://github.com/jpuka01/find-a-friend"
    },
];

function createCard(project) {
    const card = document.createElement("div");
    card.className = "max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 rounded-lg flex flex-col justify-between";

    card.innerHTML = `
        <a>
            <img class="rounded-lg border-gray-200" src="${project.imgSrc}" alt="${project.title}">
        </a>
        <div class="p-5 flex-grow">
            <p class="mb-3 font-semibold lg:text-lg text-blue-950 dark:text-white">${project.description}</p>
        </div>
        <div class="p-5 flex justify-center space-x-3">
            <a href="${project.link}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-950 rounded-lg hover:text-sky-300 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-300 dark:text-blue-950 dark:hover:text-white dark:focus:ring-white">
                <svg class="w-5 h-5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path fill="currentColor" d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
                Visit Project
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="${project.github}" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-300 rounded-lg hover:text-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-950 dark:bg-white dark:text-blue-950 dark:hover:text-sky-300 dark:focus:ring-sky-300">
                <svg class="w-6 h-6 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z" clip-rule="evenodd"/>
                </svg>
                Source Code
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
        </div>
    `;

    return card;
}

function loadProjects() {
    const projectsContainer = document.getElementById("projects");
    projects.forEach(project => {
        const card = createCard(project);
        projectsContainer.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", loadProjects);

// Dillar Academy
// Bos in Boston
// Game Deals Tracker
// Find a Friend
// Puka Holdings
// Cocktails
// Joe's Hotdogs
// Two Owl's Cafe
// Tic Tac Toe
// ------------------
// Arith
// Puka Gida Report Bot?