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
    var workExperienceList = document.getElementById("work-experience-list");
    var modalBackground = document.getElementById('modal-background')

    workExperienceList.addEventListener("click", function (e) {
        if (e.target && e.target.nodeName == "LI") {
            var id = e.target.getAttribute("data-id");

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
        }
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
        name: 'Save-Health (2022)',
        description: 'A site with an authorization and registration system, where each user has a personal account where you can add customer cards, each card is made according to a special form. In this form, you can also upload images on which you can put dots, and the program will calculate the angle between the dots.',
        pictures: [],
        link: ''
    },
    {
        id: 2,
        name: 'Amrita (July 2022 - March 2023)',
        description: 'Amrita - An online store for beauty and health products. I joined an existing project, worked on bug fixes and adding new features. Additionally, I migrated the project to the Laravel architecture.',
        pictures: [],
        link: '<a target="_blank" href="https://amrita-shop.kiev.ua/">https://amrita-shop.kiev.ua/</a>'
    },
    {
        id: 3,
        name: 'Cac-Tour/Cac-Edu (October 2023)',
        description: 'Cac-Tour/Cac-Edu - Two similar websites for selling tours and educational services for Ukrainian users. I joined an existing project and was responsible for bug fixes and website improvements for a month.',
        pictures: [],
        link: '<a target="_blank" href="https://cac-tour.com">https://cac-tour.com</a> and <a href="https://cac-edu.com.ua">https://cac-edu.com.ua</a>'
    },
    {
        id: 4,
        name: 'Estet.prom.ua (June 2023 - Now)',
        description: ' Estet-Prom - An online store with a wide variety of products and categories.I served as a backend developer, responsible for parsing products from various websites and XML files, filtering the obtained products, and similar tasks. Specifically for the store, I developed a web site that runs on Flask (Python) and interacts with users via web sockets, featuring a separate admin panel.',
        pictures: [],
        link: '<a target="_blank" href="https://estet.prom.ua/ua/">https://estet.prom.ua/ua/</a>'
    },
    {
        id: 5,
        name: 'RedBird.cafe (November-December 2023)',
        description: 'RedBird - A unique website for a restaurant chain where dishes are recommended to you by artificial intelligence based on your preferences and restrictions.I joined an existing project and was responsible for bug fixes and website improvements for two months.',
        pictures: [],
        link: '<a target="_blank" href="https://www.redbird.cafe">https://www.redbird.cafe</a>'
    },
]
