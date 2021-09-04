#! /bin/sh

cd ..
cd ..
rm -r reports

export environmentName=QA
export appUrl=https://shop-qa.univarsolutions.co.uk/
export countryName=UK

npm run Regression_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean