var ctx = document.getElementById('myChart0').getContext('2d');
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
            text: 'Первый график. Количество вакансий в группах',
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

var start = document.getElementById('myChart00').getContext('2d');
var myChart00 = new Chart(start, {
    type: 'bar',
    data: {
        labels: ['Mobile-разработчик 23522', 'Веб-разработчик 43104', 'PHP-программист 62641', 'Веб-мастер 4641', 'HTML-верстальщик 8809', 'Контент-менеджер 4900', 'Data Scientist 2861', 'GameDev 5949', 'Программист-разработчик 1С 78955', 'QA-инженер 31723', 'Администратор баз данных 4451', 'Системный программист 3068', 'Системный администратор 124845', 'DevOps 9240', 'UX/UI Designer 27162', 'Менеджер IT-проекта 57373', 'Аналитик 32231', 'Специалист по интернет-маркетингу 102968'],
        datasets: [{
            label: 'value',
            data: [23522, 43104, 62641, 4641, 8809, 4900, 2861, 5949, 78955, 31723, 4451, 3068, 124845, 9240, 27162, 57373, 32231, 102968],
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
            text: 'Финальный график. Количество вакансий в группах',
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
});

var ctx2 = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['C# 490', 'C++ 403', 'Java 3349', 'SQL 15454', '.net 126', 'MySQL 364', 'HTML 1034', 'CSS 515', 'Javascript 683', 'PHP 280'],
        datasets: [{
            label: 'value',
            data: [490, 403, 3349, 15454, 126, 364, 1034, 515, 683, 280],
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
            text: 'Desktop-разработчик',
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
});// Desktop-разработчик

var ctx3 = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['Java 3349', 'JavaScript 683', 'C++ 403', 'Python 3069', 'HTML 1034', 'SQL 15454', 'Rest 1137', 'SOAP 999', 'C# 490'],
        datasets: [{
            label: 'value',
            data: [3349, 683, 403, 3069, 1034, 15454, 1137, 999, 490],
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
            text: 'Mobile разработчик',
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
}); //Mobile разработчик

var ctx4 = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels:['html 1034', 'js 615', 'css 515', 'php 280', 'python 3069', 'java 3349', 'spring 100', 'mysql 364', 'sql 15454'],
        datasets: [{
            label: 'value',
            data: [1034, 615, 515, 280, 3069, 3349, 100, 364, 15454],
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
            text: 'WEB - Разработчик',
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
}); //WEB - Разработчик

var ctx5 = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx5, {
    type: 'bar',
    data: {
        labels: ['Java 3349', 'Python 3069', 'MySQL 364', 'C++ 403', 'R 22362', 'Excel 1105', 'Tableau 187'],
        datasets: [{
            label: 'value',
            data: [3349, 3069, 364, 403, 22362, 1105, 187],
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
            text: 'Data Scientist',
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
}); //Data Scientist

var ctx6 = document.getElementById('gameDev').getContext('2d');
var myChart6 = new Chart(ctx6, {
    type: 'bar',
    data: {
        labels: ['С 49321', 'C# 490', 'Java 3349', 'Python 3069'],
        datasets: [{
            label: 'value',
            data: [49321, 490, 3349, 3069],
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
            text: 'GameDev',
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
}); //GameDev

var erp1c = document.getElementById('erp1c').getContext('2d');
var myChart7 = new Chart(erp1c, {
    type: 'bar',
    data: {
        labels: ['Oracle 1237', 'SAP 574', 'SQL 15454'],
        datasets: [{
            label: 'value',
            data: [1237, 574, 15454],
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

var sistemInt = document.getElementById('sistemInt').getContext('2d');
var myChart8 = new Chart(sistemInt, {
    type: 'bar',
    data: {
        labels: ['ERP 2241', 'CRM 919'],
        datasets: [{
            label: 'value',
            data: [2241, 919],
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
            text: 'Системный интегратор',
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
}); //Системный интегратор

var qa = document.getElementById('qa').getContext('2d');
var myChart9 = new Chart(qa, {
    type: 'bar',
    data: {
        labels: ['Jira 4277', 'Redmine 224', 'TestRail 127', 'Postman 269', 'Selenium 832'],
        datasets: [{
            label: 'value',
            data: [4277, 224, 127, 269, 832],
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
            text: 'QA – инженер',
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
}); //QA – инженер




var adminBD = document.getElementById('adminBD').getContext('2d');
var myChart10 = new Chart(adminBD, {
    type: 'bar',
    data: {
        labels: ['PHPMyAdmin 12', 'TOra 4', 'Nagios 1', 'Zabbix 18'],
        datasets: [{
            label: 'value',
            data: [12, 4, 1, 18],
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
            text: 'Администратор баз данных',
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
}); //Администратор баз данных

var sistemProg = document.getElementById('sistemProg').getContext('2d');
var myChart11 = new Chart(sistemProg, {
    type: 'bar',
    data: {
        labels: ['C++ 403'],
        datasets: [{
            label: 'value',
            data: [403],
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
            text: 'Системный программист',
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
}); //Системный программист

var iot = document.getElementById('iot').getContext('2d');
var myChart12 = new Chart(iot, {
    type: 'bar',
    data: {
        labels: ['Java 3349', 'Python 3069', '.NET 126', 'PHP 280', 'JavaScript 683', 'HTML 1034', 'CSS 515', 'C 18951', 'C++ 403', 'Go 992'],
        datasets: [{
            label: 'value',
            data: [3349, 3069, 126, 280, 683, 1034, 515, 18951, 403, 992],
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
            text: 'IoT-инженер',
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
}); //IoT-инженер

var sistemIS = document.getElementById('sistemIS').getContext('2d');
var myChart13 = new Chart(sistemIS, {
    type: 'bar',
    data: {
        labels: ['unix 186', 'prod 149', 'git 2104', 'docker 162', 'jenkins 266', 'maven 141', 'jira 4277', 'confluence 1208', 'postman 269', 'tfs 102', 'postgresql 563', 'python 3069', 'selenium 832', 'bash 180', 'java 3349', 'sql 15454', 'mysql 364', 't-sql 115', 'php 280', 'css 515', 'java 3349', 'javascript 683', 'js 615'],
        datasets: [{
            label: 'value',
            data: [186, 149, 2104, 162, 266, 141, 4277, 1208, 269, 102, 563, 3069, 832, 180, 3349, 15454, 364, 115, 280, 515, 3349, 683, 615],
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
}); //Системный администратор ИС (DevOps инженер)

var designer = document.getElementById('designer').getContext('2d');
var myChart14 = new Chart(designer, {
    type: 'bar',
    data: {
        labels: ['HTML 1034', 'CSS 515'],
        datasets: [{
            label: 'value',
            data: [1034, 515],
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
            text: 'UX/UI дизайнер',
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
}); //UX/UI дизайнер

var men = document.getElementById('men').getContext('2d');
var myChart15 = new Chart(men, {
    type: 'bar',
    data: {
        labels: ['Scrum 1100', 'Excel 1105', 'Redmine 224', 'MS Project 872', 'Agile 1076'],
        datasets: [{
            label: 'value',
            data: [1100, 1105, 224, 872, 1076],
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
            text: 'Менеджер IT-проекта',
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
}); //Менеджер IT-проекта

var analitic = document.getElementById('analitic').getContext('2d');
var myChart16 = new Chart(analitic, {
    type: 'bar',
    data: {
        labels: ['1C 278', 'Power Bi 286'],
        datasets: [{
            label: 'value',
            data: [278, 286],
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
            text: 'Аналитик',
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
}); //Аналитик

var internet = document.getElementById('internet').getContext('2d');
var myChart17 = new Chart(internet, {
    type: 'bar',
    data: {
        labels: ['Google Analytics 496', 'Яндекс.Метрика 300'],
        datasets: [{
            label: 'value',
            data: [496, 300],
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
            text: 'Специалист по интернет-маркетингу',
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
}); //Специалист по интернет-маркетингу

