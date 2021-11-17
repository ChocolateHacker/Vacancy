// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Desktop-разработчик', 'Mobile разработчик', 'WEB - Разработчик', 'Data Scientist', 'GameDev', 'ERP - программист, Программист 1С', 'Системный интегратор', 'QA – инженер', 'Администратор баз данных', 'Системный программист', 'IoT-инженер', 'Системный администратор ИС (DevOps инженер)', 'UX/UI дизайнер', 'Менеджер IT-проекта', 'Аналитик', 'Специалист по интернет-маркетингу', 'Мусор'],
        datasets: [{
            label: 'value',
            data: [2446, 20413, 72194, 2058, 1254, 75058, 41, 18180, 4067, 18391, 7, 111059, 2018, 13742, 1492, 3901, 11062],
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
            text: 'prof',
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
});


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
            text: 'New prof',
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
});