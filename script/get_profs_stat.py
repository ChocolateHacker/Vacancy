import csv
import collections
import sys

csv.field_size_limit(1000000000)

cnt = collections.Counter()

for year in range(2002, 2021):
    print(year, file=sys.stderr)
    with open(f"../year_{year}.csv", newline='') as csvfile:
        reader = csv.DictReader(csvfile)

        for row in reader:
            # print(row["name"])
            cnt[row["name"].lower()] += 1

    # if year == 2004:
        # break

s = sum(cnt.values())

cum_sum = 0

w = csv.DictWriter(open(f"profs_stats.csv", "w"), ["times", "percent", "cum_percent", "prof"])
w.writeheader()

for k, c in cnt.most_common():
    cum_sum += c

    w.writerow({
        "times": c,
        "percent": f"{c/s * 100:0.5f}",
        "cum_percent": f"{cum_sum/s * 100:0.5f}",
        "prof": k
    })
    # print(f"{cum_sum/s * 100:0.5f}% {c/s * 100:0.5f}% {k}")
print(s)
