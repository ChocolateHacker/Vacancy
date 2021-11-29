// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Desktop-разработчик', 'Mobile разработчик', 'WEB - Разработчик', 'Data Scientist', 'GameDev', 'ERP - программист, Программист 1С', 'Системный интегратор', 'QA – инженер', 'Администратор баз данных', 'Системный программист', 'IoT-инженер', 'Системный администратор ИС (DevOps инженер)', 'UX/UI дизайнер', 'Менеджер IT-проекта', 'Аналитик', 'Специалист по интернет-маркетингу', 'Мусор', 'Неопределенные'],
        datasets: [{
            label: 'value',
            data: [26347, 110416, 322947, 7645, 31614, 127255, 1153, 154759, 14078, 50842, 110, 465048, 23193, 76445, 93521, 81898, 94651, 88943],
            backgroundColor:
                'rgba(216, 27, 96, 0.6)',
            borderColor:
                'rgba(216, 27, 96, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Количество вакансий в группах',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 10
                }
            }]
        }
    }
}); //Количество вакансий в группах


var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'value',
            data: [],
            backgroundColor:
                'rgba(175, 43, 30, 0.7)',
            borderColor:
                'rgba(179, 40, 33, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Новые профессии',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 10
                }
            }]
        }
    }
});// Новые профессии


var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["web разработчик", "web-разработчик", "веб-разработчик", "веб-программист","веб",  "веб программист", "веб разработчик", "разработчик веб-приложений", "web-программист", "php программист", "php-разработчик","php разработчик", "php developer", "web", "разработчик wordpress", "веб-мастер", "web-мастер","html-верстальщик" ],
        datasets: [{
            label: 'value',
            data: [3316, 20655, 11286, 12123, 50378, 853,771, 267, 26654, 10049, 13332, 5051, 14898, 112029, 176, 2932, 4223, 11448],
            backgroundColor:
                'rgba(241, 58, 19, 0.7)',
            borderColor:
                'rgba(204, 6, 5, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'WEB - Разработчик',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 10
                }
            }]
        }
    }
}); //Web - Программисты


var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ["программист 1с", "разработчик 1с", "программист-разработчик 1c", "1С ERP", "инженер-программист 1с", "erp-системы", "консультант erp", "sap erp", "Программист Битрикс", "Разработчик 1С-Битрикс", "PHP-разработчик Bitrix", "консультант 1c", "консультант-аналитик 1c", "аналитик 1c",  "программист-разработчик 1c", "инженер-программист 1c", "методист 1c",  "архитектор 1c", "специалист по внедрению 1c"],
        datasets: [{
            label: 'value',
            data: [111247, 9027, 136, 1457, 3377, 537, 322, 1152, 1510, 782, 24, 3307, 57, 349,  136, 352, 32,  67, 29],
            backgroundColor:
                'rgba(65, 61, 81, 0.7)',
            borderColor:
                'rgba(70, 57,75, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'ERP - программист, Программист 1С',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 10
                }
            }]
        }
    }
}); //ERP - программист, Программист 1С


var ctx5 = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: [ "администратор", "сисадмин", "системный администратор",
            "сетевой администратор", "администратор сетей", "системний адміністратор", "системный администратор linux",
            "системный администратор серверов linux", "системный администратор linux-систем", "дежурный администратор linux",
            "специалист по внедрению", "системный инженер", "инженер devops", "devops-инженер", "devops инженер", "sre инженер",
            "системный инженер linux", "специалист devops","devops администратор", "devops-разработчик",
            "devops administrator", "linux devops", "linux administrator", "administrator", "systems development engineer",
            "sre engineer", "linux engineer", "system administrator", "sysadmin", "specialist devops", "devops specialist",
            "specialist linux", "platform engineer", "devops engineer", "devops engineer hadoop",  "azure devops engineer", "devops specialist",
            "cloud devops specialist"],
        datasets: [{
            label: 'value',
            data: [238956, 77, 165102, 2737, 276, 501, 6349, 10, 5, 4, 9624, 9610, 884, 1177, 3510, 41, 278, 102, 15, 7, 7, 98, 280, 8937, 789, 45, 204, 4325, 86, 32, 945, 2, 133, 8923, 1, 25, 945, 6],
            backgroundColor:
                'rgba(76, 187, 23, 0.7)',
            borderColor:
                'rgba(3, 192, 60, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: false,
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Системный администратор ИС (DevOps инженер)',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 10
                }
            }]
        }
    }
}); //WСистемный администратор ИС (DevOps инженер):