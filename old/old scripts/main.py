
import csv
counter = 0
with open("profs_stats.csv", encoding='utf-8') as r_file:
    file_reader = csv.reader(r_file, delimiter=",")
    for row in file_reader:
        counter += 1

print(counter)