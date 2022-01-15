var dict_prof_names = {
	'Desktop-разработчик': ['desktop-разработчик', 'desktop_developer', 'desktop', 'desktop_приложения', 'desktop-приложения', 'разработчик', 'developer', 'programmer', 'developers', 'frontend_developer', 'разработка', 'development', 'software_development', ],
	'Mobile разработчик': ['android_developer', 'ios_developer', 'android_разработчик', 'android_developer', 'mobile_developer', 'mobile_разработчик', 'мобильный_разработчик', 'разработчик', 'developer', 'programmer', 'developers', 'frontend_developer', 'разработка', 'development', 'software_development', 'ios,android', 'ios_android', 'iphone,ipad', 'iphone_ipad', 'mobile', 'android_ndk', 'ndk', 'mobile_apps', 'mobile_applications', 'app_store', 'appstore', ],
	'WEB - Разработчик': ['web_разработчик', 'web-разработчик', 'веб-разработчик', 'веб-программист', 'веб_программист', 'веб_разработчик', 'web', 'веб', 'разработчик', 'developer', 'programmer', 'developers', 'frontend_developer', 'разработка', 'development', 'software_development', 'вёрстка', 'верстка_страниц', 'вёрстка_страниц', 'верстка', 'верстка_макетов', 'html-верстка', 'блочная_вёрстка', 'валидная_вёрстка', 'site', 'сайт', 'websocket', 'websockets', 'ms_sql', 'mssql', 'ms-sql', 'ms_sql_server', 'ms_sql_server_2000', 'mysql,mariadb', 'mysql_mariadb', 'mysql,postgresql', 'mysql_postgresql', 'nosql', 'nosql_databases', 'no_sql', 'no-sql', 'php,mysql', 'php+mysql', 'php,mysql', 'php_mysql', 'php', 'php7', 'php5', 'php4', 'pl-sql', 'plsql', 'pl_sql', 'postgresql', 'postgres', 'postgre', 'pgsql', 'postrgesql', 'postgressql', 'postresql', 'postgesql', 'transact_sql', 't_sql', 'transact-sql', 't-sql', 'transact_sql', 'tsql', 'базы_данных', 'баз_данных', 'бд', 'sql', 'субд', 'php,mysql', 'php+mysql', 'php,mysql', 'php_mysql', 'php', 'php7', 'php5', 'php4', 'angularjs', 'angular_js', 'ember', 'emberjs', 'ext_js', 'extjs', 'javascript,jquery', 'js_jquery', 'javascript', 'java-script', 'js', 'java_script', 'js,angular', 'js_angular', 'json,xml', 'json_xml', 'knockoutjs', 'knockout', 'nodejs', 'node_js', 'vbscript,jscript', 'vbscript_jscript', 'vue', 'vuejs', 'vue_js', 'xml,json', 'xml_json', 'html,css', 'html‚_css', 'html,css', 'html+css', 'html,css', 'html_css', 'html,dhtml', 'html_dhtml', 'html,xhtml', 'html_xhtml', 'html', 'html4', 'html5,css3', 'html5_css3', 'css', 'css2', 'html,css', 'html+css', 'html,css', 'html_css', 'sass,scss', 'sass_scss', 'html,css', 'html‚_css', ],
	'Data Scientist': ['data_scientist', 'data_scientists', 'big_data', 'bigdata', 'data_structures', 'структуры_данных', 'структур_данных', 'анализ_данных', 'data_analysis', 'dwh', 'data_warehouse', 'data_warehousing', 'nosql', 'nosql_databases', 'no_sql', 'no-sql', 'базы_данных,администратор', 'dba', 'database_administrator', ],
	'GameDev': ['unity_developer', 'game_developer', 'gamedev', 'разработчик_игр', 'games', 'game', 'unity', 'unity3d', 'unity_3d', '2d,3d', '2d_3d', '3ds_max', '3d_max', 'adobe_after_effects', 'adobe_after', 'adobe_illustrator', 'illustrator', 'after_effects', 'adobe_after_effects', 'flash', 'macromedia_flash', 'adobe_flash', 'indesign', 'adobe_indesign', 'photoshop', 'adobe_photoshop', 'adobe_acrobat', 'adobe_acrobat_pro', 'xbox', 'x-box', ],
	'ERP - программист, Программист 1С': ['1c', '1c8', '1с', '1с_8', '1с8', 'программист_1с', 'разработчик_1с', 'bitrix24', 'bitrix', 'битрикс', 'cms_bitrix', '1c-bitrix', 'битрикс24', 'битрикс_24', 'erp', 'programmer', 'erp_programmer', 'amocrm', 'amo_crm', 'siebel_crm', 'oracle_siebel', 'унф', 'упп', 'зуп', 'ут', ],
	'Системный интегратор': ['systems_integrator', 'system_integrator', 'системный_интегратор', 'планирование', 'planning', 'интеграционное_тестирование', 'интеграционного_тестирования', 'интеграционные_тесты', 'проектирование_по', 'проектировании_архитектуры', 'проектирование_архитектуры', 'паттерны_проектирования', 'design_patterns', 'паттернов_проектирования', 'паттернами_проектирования', 'шаблонов_проектирования', 'шаблоны_проектирования', 'шаблонами_проектирования', 'паттерн', 'администратор', 'administrator', 'administration', 'администрирование', 'системный_администратор', 'system_administrator', 'si', 'информационные_технологии', 'it', 'операционные_системы', 'ос', 'операционных_систем', 'базы_данных', 'баз_данных', 'бд', 'sql', 'субд', 'оптимизация_производительности', 'performance_optimization', 'оптимизации_производительности', 'performance_tuning', 'оптимизация', 'документация', 'documentation', 'организация', 'organization', 'управление', 'management', 'обучение_персонала', ],
	'QA – инженер': ['qa', 'quality_assurance', 'ручное_тестирование', 'manual_testing', 'ручного_тестирования', 'manual_qa', 'qa_engineer', 'qa-engineer', 'qa_инженер', 'инженер-тестировщик', 'тестировщик', 'tester', 'software_tester', 'тестировщик_по', '', 'автоматическое_тестирование', 'automation_engineer', 'автоматизированное_тестирование', 'автоматизированного_тестирования', 'автоматического_тестирования', 'автоматическое_тестирование', 'автотестирование', 'автоматизация_тестирования', 'автоматизированные_тесты', 'нагрузочное_тестирование', 'нагрузочного_тестирования', 'нагрузочному_тестированию', 'регрессионное_тестирование', 'регрессионный', 'регрессионного_тестирования', 'ручное_тестирование', 'manual_testing', 'ручного_тестирования', 'manual_qa', 'функциональное_тестирование', 'функционального_тестирования', 'ручное_функциональное_тестирование', 'планы_тестирования', 'test_plans', 'план_тестирования', 'тестовые_сценарии', 'тест-кейсы', 'тест-планов', 'test_cases', 'тест-планы', 'сценариев_тестирования', 'интеграционное_тестирование', 'интеграционного_тестирования', 'интеграционные_тесты', 'selenium', 'selenium_webdriver', 'webdriver', ],
	'Администратор баз данных': ['базы_данных', 'баз_данных', 'бд', 'sql', 'субд', 'базы_данных,администратор', 'dba', 'database_administrator', 'ms_sql', 'mssql', 'ms-sql', 'ms_sql_server', 'ms_sql_server_2000', 'mysql,mariadb', 'mysql_mariadb', 'mysql,postgresql', 'mysql_postgresql', 'nosql', 'nosql_databases', 'no_sql', 'no-sql', 'php,mysql', 'php+mysql', 'php,mysql', 'php_mysql', 'php', 'php7', 'php5', 'php4', 'pl-sql', 'plsql', 'pl_sql', 'postgresql', 'postgres', 'postgre', 'pgsql', 'postrgesql', 'postgressql', 'postresql', 'postgesql', 'transact_sql', 't_sql', 'transact-sql', 't-sql', 'transact_sql', 'tsql', 'php,mysql', 'php+mysql', 'php,mysql', 'php_mysql', 'oracle_e-business', 'oebs', 'siebel_crm', 'oracle_siebel', 'oracle_e-business', 'oracle_e-business_suite', ],
	'Системный программист': ['system ', 'programmer', 'системный_программист', 'операционные_системы', 'ос', 'операционных_систем', 'системы', 'систем', 'разработка', 'development', 'software_development', 'автоматизация', 'проектирование_по', 'проектировании_архитектуры', 'проектирование_архитектуры', 'разработчик', 'developer', 'programmer', 'developers', 'frontend_developer', 'разработка', 'development', 'software_development', 'ms_sql', 'mssql', 'ms-sql', 'ms_sql_server', 'ms_sql_server_2000', 'mysql,mariadb', 'mysql_mariadb', 'mysql,postgresql', 'mysql_postgresql', 'nosql', 'nosql_databases', 'no_sql', 'no-sql', 'php,mysql', 'php+mysql', 'php,mysql', 'php_mysql', 'php', 'php7', 'php5', 'php4', 'pl-sql', 'plsql', 'pl_sql', 'postgresql', 'postgres', 'postgre', 'pgsql', 'postrgesql', 'postgressql', 'postresql', 'postgesql', 'transact_sql', 't_sql', 'transact-sql', 't-sql', 'transact_sql', 'tsql', 'базы_данных', 'баз_данных', 'бд', 'sql', 'субд', 'php,mysql', 'php+mysql', 'php,mysql', 'php_mysql', 'php', 'php7', 'php5', 'php4', 'angularjs', 'angular_js', 'ember', 'emberjs', 'ext_js', 'extjs', 'javascript,jquery', 'js_jquery', 'javascript', 'java-script', 'js', 'java_script', 'js,angular', 'js_angular', 'json,xml', 'json_xml', 'knockoutjs', 'knockout', 'nodejs', 'node_js', 'vbscript,jscript', 'vbscript_jscript', 'vue', 'vuejs', 'vue_js', 'xml,json', 'xml_json', 'вёрстка', 'верстка_страниц', 'вёрстка_страниц', 'верстка', 'верстка_макетов', 'блочная_вёрстка', 'валидная_вёрстка', 'css', 'css2', 'linux,freebsd', 'linux_freebsd', 'linux', 'gnu_linux', 'ос_linux', 'linux', 'ос_linux', 'c++', 'c++11', 'c++', 'c_++', 'c++', 'с++', 'c,c++', 'c_c++', 'go', 'golang', 'python', 'python3', 'python', 'python_developer', ],
	'IoT-инженер': ['инженер', 'engineer', 'iot', 'iot-разработчик', 'internet_of_things', 'iot_разработчик', 'iot-инженер', 'iot_инженер', 'умный_дом', 'умные_вещи', 'инженер_интернет_вещей', 'java', 'javascript', 'java-script', 'js', 'java_script', 'c,c++', 'c_c++', 'python', 'python3', 'технологии', 'технология', 'technology', 'technologies', 'iiot', 'умный_город', 'умный_гаджет', 'микроконтроллеры', 'отладка_по', ],
	'Системный администратор ИС (DevOps инженер)': ['windows', 'MacOS', 'linux', 'Администрирование_сервера', 'VPS', 'VDS', 'TCP', 'IP', 'Настройка_ПО', 'Сетевое_оборудование', 'Обслуживание_ПК', 'Обслуживание_серверов', 'техническое_обслуживание', ],
	'UX/UI дизайнер': ['Дизайн_интерфейсов', 'Photoshop', 'illustrator', 'CSS', 'HTML', 'UX', 'UI', 'Figma', 'Прототипироаание', 'Прототип', 'Вёрстка', 'Верстка', ],
	'Менеджер IT-проекта': ['Управление_проектами', 'Ведение_переговоров', 'Менеджмент', 'управление', 'Системный_подход', 'Организаторские_навыки', 'Презентация', ],
	'Аналитик': ['Анализ_данных', 'Прогнозирование', 'Моделирование', 'Исследования', 'Глубокий_анализ', 'Системный_подход', 'Базы_данных', 'Регрессионный_анализ', 'Конкурентая_аналитика', 'Статистика', ],
	'Специалист по интернет-маркетингу': ['Интернет_маркетинг', 'Digital_marketing', 'Контекстная_реклама', 'Яндекс.Директ', 'SEO', 'Бизнес_анализ', 'Изучение_рынка', 'Маркетинговая_стратегия', 'Google_Analytics', 'Google_AdWords', '', '', 
}