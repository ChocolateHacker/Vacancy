import csv
from ast import literal_eval

valueX = []
numberY = []
file = open("prof_data.txt", "r", encoding='utf-8').read()

data = literal_eval(file)
for key in data.keys():
    valueX.append(key)

    str = data.get(key)
    counter = 0
    with open("filtredbaza.csv", encoding='utf-8') as r_file:
        file_reader = csv.reader(r_file, delimiter = ",")
        for row in file_reader:
            for i in str:
                if row[0] == i.lower():
                    counter = counter + int(row[1])


    with open("filtredbazaAnal.csv", encoding='utf-8') as r_file:
        file_reader = csv.reader(r_file, delimiter = ",")
        for row in file_reader:
            for i in str:
                if row[0] == i.lower():
                    counter = counter + int(row[1])

    numberY.append(counter)

print(valueX)
print(numberY)


st = ['Разработка_игр', 'С#', 'C++', 'Java']
