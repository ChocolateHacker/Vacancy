import csv
from ast import literal_eval

valueX = []
numberY = []
file = open("prof_data_value_2.txt", "r", encoding='utf-8').read()
data = literal_eval(file)
for key in data.keys():
    valueX.append(key)

    counter = 0
    array_in_prof = data.get(key)
    with open("profs_stats.csv", encoding='utf-8') as r_file:
        file_reader = csv.reader(r_file, delimiter=",")
        for row in file_reader:
            for i in array_in_prof:
                if i.lower() in row[0]:
                    counter += int(row[1])
    with open("filtredbazaAnal.csv", encoding='utf-8') as r_file:
        file_reader = csv.reader(r_file, delimiter=",")
        for row in file_reader:
            for i in array_in_prof:
                if i.lower() in row[0]:
                    counter += int(row[1])

    numberY.append(counter)
    print(numberY)

print(valueX)
print(numberY)
