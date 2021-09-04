cd ..
cd ..
rmdir reports /q /s
echo 'Removed Reports Directory'
set environmentName=QA
set appUrl=https://shop-qa.univarsolutions.co.uk/
set countryName=UK

call npm run Regression_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean

