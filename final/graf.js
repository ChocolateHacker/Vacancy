
var ctx = document.getElementById('myChart0').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels:['Программист 183633', 'Веб 152894', 'Системный администратор 136672', 'Менеджер (IT-проекта) 135785', 'ERP 130938', 'Специалист по интернет-маркетингу 125926', 'Аналитик 71983', 'Специалист техподдержки 55472', 'Системный инженер (+QA-инженер) 53333', 'Инженер 45380', 'UX/UI дизайнер 32604', 'Mobile - разработчик 28184', 'Руководитель 24232', 'Devops 18414', 'IT-специалист 14745', 'Специалист по информационной безопасности 8297', 'GameDev 7950', 'Администратор баз данных 6265', 'Data Scientist 3848', 'Системный программист 3068', 'Мусор 145891'],
        datasets: [{
            label: 'value',
            data: [183633, 152894, 136672, 135785, 130938, 125926, 71983, 55472, 53333, 45380, 32604, 28184, 24232, 18414, 14745, 8297, 7950, 6265, 3848, 3068, 145891],
            backgroundColor:
                ['rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)','rgba(216, 27, 96, 0.8)',
                    'rgba(216, 27, 96, 0.8)'],
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
            text: 'Общий график. Количество вакансий в группах',
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
});//Общий график. Количество вакансий в группах

var start = document.getElementById('myChart00').getContext('2d');
var myChart00 = new Chart(start, {
    type: 'bar',
    data: {
        labels: ['Программист 7815', 'Менеджер (IT-проекта) 6545', 'ERP 6503', 'Системный администратор 6136', 'Специалист по интернет-маркетингу 5633', 'Аналитик 5441', 'Веб 3713', 'Специалист техподдержки 3660', 'Системный инженер (+QA-инженер) 2911', 'Инженер 2260', 'Devops 2113', 'Mobile - разработчик 1976', 'UX/UI дизайнер 1303', 'Руководитель 1127', 'GameDev 673', 'Специалист по информационной безопасности 661', 'Data Scientist 641', 'IT-специалист 604', 'Администратор баз данных 229', 'Системный программист 156','Мусор 5602'],
        datasets: [{
            label: 'value',
            data: [7815, 6545, 6503, 6136, 5633, 5441, 3713, 3660, 2911, 2260, 2113, 1976, 1303, 1127, 673, 661, 641, 604, 229, 156, 5602],
            backgroundColor:
                ['rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)','rgba(241, 58, 19, 0.8)'],
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
            text: 'Общий график за 2021',
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
}); //Общий график за 2021

var gr1 = document.getElementById('gr2020').getContext('2d');
var gr2020 = new Chart(gr1, {
    type: 'bar',
    data: {
        labels: ['Программист 19767', 'ERP 15810', 'Менеджер (IT-проекта) 14902', 'Системный администратор 14559', 'Специалист по интернет-маркетингу 13420', 'Аналитик 11592', 'Веб 11066', 'Системный инженер (+QA-инженер) 7019', 'Специалист техподдержки 6771', 'Инженер 5711', 'Mobile - разработчик 4533', 'Devops 4315', 'UX/UI дизайнер 2827', 'Руководитель 2529', 'Специалист по информационной безопасности 1644', 'IT-специалист 1591', 'GameDev 1573', 'Data Scientist 1099', 'Администратор баз данных 572', 'Системный программист 377', 'Мусор 16320'],
        datasets: [{
            label: 'value',
            data: [19767, 15810, 14902, 14559, 13420, 11592, 11066, 7019, 6771, 5711, 4533, 4315, 2827, 2529, 1644, 1591, 1573, 1099, 572, 377, 16320],
            backgroundColor:
                ['rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)','rgba(347, 100, 56, 0.8)'],
            borderColor:
                'rgba(123, 0, 28, 1)',
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
            text: 'Общий график за 2020',
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
});//Общий график за 2020

var gr2 = document.getElementById('gr2019').getContext('2d');
var gr2019 = new Chart(gr2, {
    type: 'bar',
    data: {
        labels:['Программист 23948', 'ERP 20193', 'Системный администратор 18080', 'Менеджер (IT-проекта) 16752', 'Специалист по интернет-маркетингу 15922', 'Веб 15463', 'Аналитик 11804', 'Специалист техподдержки 8549', 'Системный инженер (+QA-инженер) 7973', 'Инженер 6842', 'Mobile - разработчик 4931', 'Devops 4320', 'UX/UI дизайнер 3488', 'Руководитель 2919', 'IT-специалист 2216', 'GameDev 1532', 'Специалист по информационной безопасности 1527', 'Data Scientist 1145', 'Администратор баз данных 627', 'Системный программист 343', 'Мусор 17117'],
        datasets: [{
            label: 'value',
            data: [23948, 20193, 18080, 16752, 15922, 15463, 11804, 8549, 7973, 6842, 4931, 4320, 3488, 2919, 2216, 1532, 1527, 1145, 627, 343, 17117],
            backgroundColor:
                ['rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)','rgba(180, 76, 67, 0.8)'],
            borderColor:
                'rgba(175, 64, 53, 1)',
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
            text: 'Общий график за 2019',
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
});//Общий график за 2019

var gr3 = document.getElementById('gr2018').getContext('2d');
var gr2018 = new Chart(gr3, {
    type: 'bar',
    data: {
        labels: ['Mobile - разработчик 4349', 'Веб 19372', 'Программист 24254', 'Data Scientist 842', 'GameDev 1256', 'ERP 19968', 'Системный инженер (+QA-инженер) 6961', 'Администратор баз данных 554', 'Системный программист 317', 'Системный администратор 17463', 'Devops 3113', 'UX/UI дизайнер 3973', 'Менеджер (IT-проекта) 17222', 'Аналитик 9833', 'Специалист по интернет-маркетингу 16673', 'Специалист техподдержки 7795', 'Инженер 6331', 'IT-специалист 2231', 'Специалист по информационной безопасности 1388', 'Руководитель 2870', 'Мусор 40659'],
        datasets: [{
            label: 'value',
            data: [24254, 19968, 19372, 17463, 17222, 16673, 9833, 7795, 6961, 6331, 4349, 3973, 3113, 2870, 2231, 1388, 1256, 842, 554, 317, 40659],
            backgroundColor:
                ['rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)','rgba(27,85,131, 0.6)'],
            borderColor:
                'rgba(26, 72, 118, 0.8)',
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
            text: 'Общий график за 2018',
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
});//Общий график за 2018

var gr4 = document.getElementById('gr2017').getContext('2d');
var gr2017 = new Chart(gr4, {
    type: 'bar',
    data: {
        labels: ['Программист 19832', 'Веб 18279', 'ERP 15777', 'Специалист по интернет-маркетингу 14622', 'Менеджер (IT-проекта) 14233', 'Системный администратор 13747', 'Аналитик 7750', 'Специалист техподдержки 5789', 'Системный инженер (+QA-инженер) 5455', 'Инженер 5085', 'Mobile - разработчик 3549', 'UX/UI дизайнер 3506', 'Руководитель 2435', 'Devops 1898', 'IT-специалист 1530', 'Специалист по информационной безопасности 953', 'GameDev 917', 'Администратор баз данных 482', 'Data Scientist 422', 'Системный программист 256', 'Мусор 14127'],
        datasets: [{
            label: 'value',
            data: [19832, 18279, 15777, 14622, 14233, 13747, 7750, 5789, 5455, 5085, 3549, 3506, 2435, 1898, 1530, 953, 917, 482, 422, 256, 14127],
            backgroundColor:
                ['rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143,1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143,1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143,1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)','rgba(188, 143, 143, 1)'],
            borderColor:
                'rgba(204, 146, 147, 1)',
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
            text: 'Общий график за 2017',
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
});//Общий график за 2017

var gr5 = document.getElementById('gr20172021').getContext('2d');
var gr20172021 = new Chart(gr5, {
    type: 'bar',
    data: {
        labels: ['Программист 95616', 'ERP 78251', 'Системный администратор 69985', 'Менеджер (IT-проекта) 69654', 'Веб 67893', 'Специалист по интернет-маркетингу 66270',
            'Аналитик 46420', 'Специалист техподдержки 32564', 'Системный инженер (+QA-инженер) 30319', 'Инженер 26229',
            'Mobile - разработчик 19338', 'Devops 15759', 'UX/UI дизайнер 15097', 'Руководитель 11880', 'IT-специалист 8172',
            'Специалист по информационной безопасности 6173', 'GameDev 5951', 'Data Scientist 4149', 'Администратор баз данных 2464',
            'Системный программист 1449', 'Мусор 93825'],
        datasets: [{
            label: 'value',
            data: [95616, 78251, 69985, 69654, 67893, 66270, 46420, 32564, 30319, 26229, 19338, 15759, 15097, 11880, 8172, 6173, 5951, 4149, 2464, 1449, 93825],
            backgroundColor:
                ['rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)','rgba(248, 23, 62, 0.6)'],
            borderColor:
                'rgba(252, 40, 71, 0.8)',
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
            text: 'Общий график за 2017-2021',
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
});//Общий график за 2017-2021