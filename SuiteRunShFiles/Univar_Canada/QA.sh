#! /bin/sh

cd ..
cd ..
rm -r reports
echo 'Removed Reports Directory'
export environmentName=QA
export appUrl=https://shop-qa.univarsolutions.com/ca/en/
export countryName=Canada

npm run Regression_Capabilities
node_modules/.bin/allure generate reports -o allure-Report/chrome --clean
