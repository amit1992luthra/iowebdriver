#!/usr/bin/env bash

cd ..
cd ..
rmdir reports /q /s
echo 'Removed Reports Directory'
export environmentName=Dev
export appUrl=https://shop-dev.univarsolutions.com/ca/en/
export countryName=Canada

npm run Smoke_Capabilities
node_modules/.bin/allure generate reports -o allure-Report/chrome --clean

