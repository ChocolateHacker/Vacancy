
import csv
counter = 0
arrX=[]
fff= 0
arr_value = [ "администратор", "администратор средств разработки", "сисадмин", "системный администратор",\
             "сетевой администратор", "администратор сетей", "системний адміністратор", "системный администратор linux",\
             "системный администратор серверов linux", "системный администратор linux-систем", "дежурный администратор linux",\
             "специалист по внедрению", "системный инженер", "инженер devops", "devops-инженер", "devops инженер", "sre инженер",\
             "системный инженер linux",  "инженер по astra linux",  "инженер по debian linux", "специалист devops", "специалист devops-практик", \
             "специалист по devops-практикам", "devops администратор", "devops инженер на микросервисы", "devops-разработчик",\
             "devops administrator", "linux devops", "linux administrator", "administrator", "systems engineer", "systems development engineer",\
             "sre engineer", "linux engineer", "system administrator", "sysadmin", "specialist sre", "specialist devops", "devops specialist",\
             "specialist linux", "platform engineer", "devops engineer", "devops engineer hadoop",  "azure devops engineer", "devops specialist",\
             "cloud devops specialist", "data engineer devops"]

for el in arr_value:
    with open("profs_stats.csv", encoding='utf-8') as r_file:
        file_reader = csv.reader(r_file, delimiter=",")
        for row in file_reader:
            if el.lower() in row[3]:
                counter += int(row[0])
                fff += int(row[0])
        arrX.append(counter)
        counter = 0

print(arrX)
print(fff)