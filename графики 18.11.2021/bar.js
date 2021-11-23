// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Desktop-разработчик ', 'Mobile разработчик ', 'WEB - Разработчик ', 'Data Scientist ', 'GameDev ', 'ERP - программист, Программист 1С ', 'Системный интегратор ', 'QA – инженер ', 'Администратор баз данных ', 'Системный программист ', 'IoT-инженер ', 'Системный администратор ИС (DevOps инженер) ', 'UX/UI дизайнер ', 'Менеджер IT-проекта ', 'Аналитик ', 'Специалист по интернет-маркетингу ', 'Мусор'],
        datasets: [{
            label: 'value',
            data: [17275, 57486, 89478, 2585, 14383, 24448, 130, 99973, 6085, 27246, 30, 128542, 2879, 11980, 1954, 10556, 51265],
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
}); //Web - Программисты