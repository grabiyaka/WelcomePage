const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

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

if(savedTheme){
    if (savedTheme === 'dark') {
        themeToggle.checked = true;
        body.classList.add('dark-theme');
    } else {
        themeToggle.checked = false;
        body.classList.remove('dark-theme');
    }
} else{
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


workExperienceList.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "LI") {
        var id = e.target.getAttribute("data-id");

        let name;
        let description;

        projects_info.forEach(el => {
            if (el.id == id) {
                name = el.name;
                description = el.description;
            }
        });

        var modalInfo = document.getElementById("modal-info");
        modalInfo.innerHTML = "";
        modalInfo.classList.remove("typing");

        // Устанавливаем новый текст с задержкой для корректного запуска анимации
        setTimeout(() => {
            modalInfo.innerHTML = description;
            modalInfo.classList.add("typing");
        }, 100); // Немного подождем перед добавлением класса

        document.getElementById("modal-title").innerHTML = name;
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



let projects_info = [
    {
        id: 1,
        name: 'Save-Health (2022)',
        description: 'A site with an authorization and registration system, where each user has a personal account where you can add customer cards, each card is made according to a special form. In this form, you can also upload images on which you can put dots, and the program will calculate the angle between the dots.',
        pictures: []
    },
    {
        id: 2,
        name: 'Amrita (July 2022 - March 2023)',
        description: '<a href="https://amrita-shop.kiev.ua/">Amrita</a> (July 2022 - March 2023)',
        pictures: []
    },
    {
        id: 3,
        name: 'Cac-Tour/Cac-Edu (October 2023)',
        description: '<a href="https://cac-tour.com">Cac-Tour</a>/<a href="https://cac-edu.com.ua">Cac-Edu</a>(October 2023)',
        pictures: []
    },
    {
        id: 4,
        name: 'Estet.prom.ua (June 2023 - Now)',
        description: '<a href="https://estet.prom.ua/ua/">Estet.prom.ua</a> (June 2023 - Now)',
        pictures: []
    },
    {
        id: 5,
        name: 'RedBird.cafe (November-December 2023)',
        description: '<a href="https://www.redbird.cafe">RedBird.cafe</a> (November-December 2023)',
        pictures: []
    },
]
