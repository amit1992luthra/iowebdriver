#! /bin/sh

cd ..
cd ..
rm -r reports

export environmentName=Prod
export appUrl=https://www.univarsolutions.co.uk/
export countryName=UK

npm run Smoke_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean