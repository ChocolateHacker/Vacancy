var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['Desktop-разработчик 32', 'Mobile разработчик 23522', 'WEB - Разработчик 124701', 'Data Scientist 2861',
            'GameDev 5949', 'ERP - программист, Программист 1С 78955', 'Системный интегратор 41',
            'QA – инженер 31723', 'Администратор баз данных 4451', 'Системный программист 3068', 'IoT-инженер 7',
            'Системный администратор ИС (DevOps инженер) 135300', 'UX/UI дизайнер 27162', 'Менеджер IT-проекта 57373',
            'Аналитик 32231', 'Специалист по интернет-маркетингу 102968', 'Мусор 55579'],
        datasets: [{
            label: 'value',
            data: [32, 23522, 124701, 2861, 5949, 78955, 41, 31723, 4451, 3068, 7, 135300, 27162, 57373, 32231, 102968, 55579],
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
        labels: ['Веб-разработчик 43104', 'PHP-программист 62641', 'Веб-мастер 4641', 'HTML-верстальщик 8809',
            'руководитель web-проектов 462', 'контент-менеджер 4900', 'Другое 161'],
        datasets: [{
            label: 'value',
            data: [43104, 62641, 4641, 8809, 462, 4900, 161],
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
        labels:['Программист-разработчик 1с 75226', 'Битрикс 925', 'ERP-системы 62', 'Консультант-аналитик 1с 1371'],
        datasets: [{
            label: 'value',
            data: [75226, 925, 62, 1371],
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
        labels: ['Системный администратор 124845', 'Devops 9240', 'Остальные администраторы 1584'],
        datasets: [{
            label: 'value',
            data: [124845, 9240, 1584],
            backgroundColor:
                'rgba(146, 78, 125, 0.7)',
            borderColor:
                'rgba(140, 69, 60, 102)',
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