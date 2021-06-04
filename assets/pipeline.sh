#!/bin/bash

if [[ $(python3 statictest.py) = 0 ]]
then
    echo 'Student ID & Names are not present in files!'
    exit 2
else
    echo 'Comments Verification Pass!'  
fi


#Student Name & ID
echo "Student Name: Jagdeep Singh"
echo "Student ID: 1367758"

# Continues Integration using shell commands
echo "CI Process started"

# OS information
uname -a


# Working dir
echo "Project working directory"

# Install all dpenedencies of node_modules
npm install

# Running build
npm run build 

# Running all the unittest cases
npm run test -- --watchAll=false

