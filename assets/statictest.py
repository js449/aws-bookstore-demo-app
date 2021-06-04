#!/usr/bin/python3
import sys
from pathlib import Path

# Getting Current path
BASE_DIR = Path(__file__).resolve().parent

for path in Path(BASE_DIR).joinpath("src").rglob("*.test.tsx"):
    f = open(path.__str__(), 'r')
    raw_data = f.read()
    if raw_data.find('Student Name: Jagdeep Singh') != -1 and raw_data.find('Student ID: 1367758') != -1:
        pass
    else:
        print("Comments are not present in file {path}".format(path=path))
        sys.exit(0)
    f.close()

# Final Message if everything is okay
print("All test cases have your Student Name and Student ID")
