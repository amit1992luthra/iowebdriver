#! /bin/sh

cd ..
cd ..
rm -r reports

export environmentName=QA
export appUrl=https://shop-qa.univarsolutions.com/
export countryName=USA

npm run Smoke_Capabilities
node_modules/.bin/allure generate reports -o allure-Report/chrome --clean