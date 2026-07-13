document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const profilePhoto = document.getElementById("profile-photo");
    const modalPhoto = document.getElementById("modal-photo");

    profilePhoto.addEventListener("click", function () {
        modalPhoto.classList.add("active");
    });

    modalPhoto.addEventListener("click", function (event) {
        modalPhoto.classList.remove("active");

    });

    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-theme');
    });

    const setTheme = (theme) => {
        if (theme === 'dark') {
            themeToggle.checked = true;
            body.classList.add('dark-theme');
        } else {
            themeToggle.checked = false;
            body.classList.remove('dark-theme');
        }
    };

    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        if (savedTheme === 'dark') {
            themeToggle.checked = true;
            body.classList.add('dark-theme');
        } else {
            themeToggle.checked = false;
            body.classList.remove('dark-theme');
        }
    } else {
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(userPrefersDark ? 'dark' : 'light');

    }

    // Save user preference on theme change
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });

    var modal = document.getElementById("modal");
    var modalContent = document.querySelector(".modal-content");
    var modalBackground = document.getElementById('modal-background')

    document.querySelectorAll("[data-id]").forEach(function (experienceItem) {
        experienceItem.addEventListener("click", function () {
            var id = experienceItem.getAttribute("data-id");

            let name;
            let description;
            let link;

            projects_info.forEach(el => {
                if (el.id == id) {
                    name = el.name;
                    description = el.description;
                    link = el.link;
                }
            });

            var modalInfo = document.getElementById("modal-info");

            modalInfo.innerHTML = description;

            document.getElementById("modal-title").innerHTML = name;
            var linkBlock = document.getElementById("link")
            if (link) {
                linkBlock.innerHTML = 'Link for a project: ' + link;
            } else {
                linkBlock.innerHTML = ''
            }
            modal.classList.add("active");
            modalContent.classList.add("active");
        });
    });

    // Закрытие модального окна при нажатии на крестик
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function () {
        modal.classList.remove("active");
        modalContent.classList.remove("active");
    }

    modalBackground.onclick = function () {
        modal.classList.remove("active");
        modalContent.classList.remove("active");
    }


})

let projects_info = [
    {
        id: 1,
        name: 'GoldenStay Property Management Platform',
        description: `
            Production property management platform connected to multiple reservation channels, including Airbnb, Booking.com and other providers through Rentals United integration.
            <br><br>
            <strong>Responsibilities</strong>
            <ul>
                <li>Developed and maintained customer-facing web applications and internal management tools.</li>
                <li>Built and maintained a guest portal with secure token-based authentication, reservation management and an AI assistant integrated with property-specific information.</li>
                <li>Designed and implemented secure REST APIs supporting new business functionality and third-party integrations.</li>
                <li>Expanded the database schema by introducing new entities and relationships for new product features.</li>
                <li>Developed a custom WordPress plugin to synchronize external websites with the internal booking platform through protected API endpoints.</li>
                <li>Supported production deployments and application maintenance using Linux, Nginx, TLS certificates and GitHub Actions.</li>
                <li>Collaborated within a cross-functional development team working on a shared production codebase.</li>
            </ul>
            <strong>Environment</strong>
            <br>
            JavaScript &bull; Fastify &bull; Vue.js &bull; Pinia &bull; Prisma &bull; MySQL &bull; EJS &bull; Linux &bull; Nginx &bull; GitHub Actions
        `,
        pictures: [],
        link: ''
    },
    {
        id: 2,
        name: 'Save-Health (2022)',
        description: 'Commercial web application with user authentication, personal accounts and form-based customer records. Built features across the application and supported backend functionality.',
        pictures: [],
        link: ''
    },
    {
        id: 3,
        name: 'Amrita (July 2022 - March 2023)',
        description: 'E-commerce website for beauty and health products. Joined an existing commercial project, fixed bugs, added features and supported backend improvements.',
        pictures: [],
        link: '<a target="_blank" href="https://amrita-shop.kiev.ua/">https://amrita-shop.kiev.ua/</a>'
    },
    {
        id: 4,
        name: 'Cac-Tour/Cac-Edu (October 2023)',
        description: 'Commercial websites for tours and educational services. Worked on bug fixes, content-related improvements and website maintenance.',
        pictures: [],
        link: '<a target="_blank" href="https://cac-tour.com">https://cac-tour.com</a> and <a href="https://cac-edu.com.ua">https://cac-edu.com.ua</a>'
    },
    {
        id: 5,
        name: 'Estet.prom.ua (June 2023 - Now)',
        description: 'E-commerce automation work focused on backend data processing, product parsing from websites and XML files, filtering logic and admin tooling.',
        pictures: [],
        link: '<a target="_blank" href="https://estet.prom.ua/ua/">https://estet.prom.ua/ua/</a>'
    },
    {
        id: 6,
        name: 'RedBird.cafe (November-December 2023)',
        description: 'Restaurant website project with AI-assisted dish recommendations. Joined an existing project and worked on bug fixes and website improvements.',
        pictures: [],
        link: '<a target="_blank" href="https://www.redbird.cafe">https://www.redbird.cafe</a>'
    },
]
