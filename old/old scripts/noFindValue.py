import csv

numberY = [4349, 19372, 24254, 842, 1256, 19968, 6961, 554, 317, 17463, 3113, 3973, 17222, 9833, 16673, 7795, 6331, 2231, 1388, 2870, 40659]
counter = 0
c = 0

with open("profs_stats2018.csv", encoding='utf-8') as r_file:
    file_reader = csv.reader(r_file, delimiter=",")
    for row in file_reader:
        if len(row) == 0:
            continue
        if row[0].isdigit():
            counter += int(row[0])

for i in numberY:
    c += i
print("HEllo")
print(f"Vacancy {counter}")
print(f"Not_Find {counter - c} ")
print(f"Find {c} ")
