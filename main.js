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
        name: 'GoldenStay',
        description: `
            <strong>Full-Stack Developer</strong><br>
            Dec 2024 &mdash; Present
            <br><br>
            Production property management and booking platform connected to Airbnb, Booking.com and other reservation channels through Rentals United.
            <br><br>
            <ul>
                <li>Developed and maintained customer-facing web applications and internal management tools.</li>
                <li>Built a secure guest portal with token-based authentication, reservation management and an AI assistant using property-specific information.</li>
                <li>Designed REST APIs and expanded the database schema for new product features and business workflows.</li>
                <li>Developed integrations, including a custom WordPress plugin and protected API endpoints.</li>
                <li>Supported production deployments and CI/CD using Linux, Nginx, TLS certificates and GitHub Actions.</li>
            </ul>
        `,
        pictures: [],
        link: ''
    },
    {
        id: 2,
        name: 'Save-Health',
        description: `
            <strong>Full-Stack Developer</strong><br>
            2022
            <br><br>
            Developed new features for a healthcare platform used by posture specialists as part of a two-developer Laravel and Vue.js team.
        `,
        pictures: [],
        link: ''
    },
    {
        id: 3,
        name: 'Amrita',
        description: `
            <strong>Part-Time Full-Stack Developer</strong><br>
            Jul 2022 &mdash; Mar 2023
            <br><br>
            Rebuilt and maintained an e-commerce platform using Laravel, Vue.js and MySQL, delivering new business features and ongoing improvements on a part-time basis.
        `,
        pictures: [],
        link: ''
    },
    {
        id: 4,
        name: 'CAC Tour / CAC Edu',
        description: `
            <strong>Backend Developer</strong><br>
            Oct 2023
            <br><br>
            Fixed backend issues and implemented improvements in Fastify-based commercial applications.
        `,
        pictures: [],
        link: ''
    },
    {
        id: 5,
        name: 'Estet',
        description: `
            <strong>Python Developer</strong><br>
            May 2023 &mdash; 2024
            <br><br>
            Built data-processing tools using Python, including generating, parsing and transforming large XML datasets for product synchronisation.
        `,
        pictures: [],
        link: ''
    },
    {
        id: 6,
        name: 'RedBird Cafe',
        description: `
            <strong>Frontend Developer</strong><br>
            Nov 2023 &mdash; Dec 2023
            <br><br>
            Improved application performance and resolved production frontend issues in an existing Vue.js application.
        `,
        pictures: [],
        link: ''
    },
]
