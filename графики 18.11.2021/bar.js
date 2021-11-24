// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Desktop-разработчик', 'Mobile разработчик', 'WEB - Разработчик', 'Data Scientist', 'GameDev', 'ERP - программист, Программист 1С', 'Системный интегратор', 'QA – инженер', 'Администратор баз данных', 'Системный программист', 'IoT-инженер', 'Системный администратор ИС (DevOps инженер)', 'UX/UI дизайнер', 'Менеджер IT-проекта', 'Аналитик', 'Специалист по интернет-маркетингу', 'Мусор'],
        datasets: [{
            label: 'value',
            data: [26347, 110416, 322947, 7645, 31614, 127255, 1153, 154759, 14078, 50842, 110, 465048, 23193, 76445, 93521, 81898, 94651],
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
        labels: ['неопределенные'],
        datasets: [{
            label: 'value',
            data: [5427],
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
        labels: ["Верстальщик", "front", "back", "Конструктор сайтов/cms", "Контент менеджмент", "Интернет маркетинг"],
        datasets: [{
            label: 'value',
            data: [1706, 2229, 22810, 20, 1994, 504],
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
        labels: ['Аналитик', 'Программист-разработчик', 'Специалист по внедрению'],
        datasets: [{
            label: 'value',
            data: [28568, 3180, 3415],
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
        labels: ['Сетевой администратор', 'Разработчик'],
        datasets: [{
            label: 'value',
            data: [11721, 29099],
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