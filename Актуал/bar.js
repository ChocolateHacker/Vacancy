// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['Desktop-разработчик 2455', 'Mobile разработчик 23155', 'WEB - Разработчик 85385', 'Data Scientist 2861',
            'GameDev 5792', 'ERP - программист, Программист 1С 77694', 'Системный интегратор 41', 'QA – инженер 31464',
            'Администратор баз данных 4164', 'Системный программист 3068', 'IoT-инженер 7', 'Системный администратор ИС (DevOps инженер) 130799',
            'UX/UI дизайнер 6130', 'Менеджер IT-проекта 32089', 'Аналитик 30449', 'Специалист по интернет-маркетингу 46593', 'Мусор 11062'],
        datasets: [{
            label: 'value',
            data: [2455, 23155, 85385, 2861, 5792, 77694, 41, 31464, 4164, 3068, 7, 130799, 6130, 32089, 30449, 46593, 11062],
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
                    min: 0
                }
            }]
        }
    }
});//Количество вакансий в группах


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
                    min: 0
                }
            }]
        }
    }
});// Новые профессии


var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["web-программист", "php-программист", "web",  "web-мастер",  "html-верстальщик" ],
        datasets: [{
            label: 'value',
            data: [75925, 43330,  162407,  7155, 11448],
            backgroundColor:
                'rgba(241, 58, 19, 0.7)',
            borderColor:
                'rgba(204, 6, 5, 1)',
            borderWidth: 1,
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
                    min: 0,
                },
            }]
        }
    }
}); //Web - Программисты


var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
            labels: ["1C-программист", "ERP-системы", "1С-Битрикс", "1C-аналитик"],
        datasets: [{
            label: 'value',
            data: [124371, 3468, 2316, 3745],
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
                    min: 0
                }
            }]
        }
    }
}); //ERP - программист, Программист 1С


var ctx5 = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: [ "администратор",  "системный администратор", "devops-инженер"],
        datasets: [{
            label: 'value',
            data: [238956, 209415,  16677],
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
                    min: 0
                }
            }]
        }
    }
}); //WСистемный администратор ИС (DevOps инженер):