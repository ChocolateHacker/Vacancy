import csv
from ast import literal_eval
valueX = []
numberY = []
counter = 0
file = open("prof_data_value_2.txt", "r", encoding='utf-8').read()
data = literal_eval(file)
for key in data.keys():
    counter = 0
    array_in_prof = data.get(key)
    with open("profs_stats.csv", encoding='utf-8') as r_file:
        file_reader = csv.reader(r_file, delimiter=",")
        for row in file_reader:
            if len(row) == 0:
                continue
            for i in array_in_prof:
                if i.lower() == row[3]:
                    counter += int(row[0])
    valueX.append(f'{key} {counter}')
    numberY.append(counter)

    # with open("filtredbaza.csv", encoding='utf-8') as r_file:
    #     file_reader = csv.reader(r_file, delimiter=",")
    #     for row in file_reader:
    #         for i in array_in_prof:
    #             if i.lower() in row[0]:
    #                 counter += int(row[1])
    # with open("filtredbazaAnal.csv", encoding='utf-8') as r_file:
    #     file_reader = csv.reader(r_file, delimiter=",")
    #     for row in file_reader:
    #         for i in array_in_prof:
    #             if i.lower() in row[0]:
    #                 counter += int(row[1])
    #
    # valueX.append(f'{key} {counter}')
    # numberY.append(counter)

print("HEllo")
print(valueX)
print(numberY)