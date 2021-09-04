cd ..
cd ..
rmdir reports /q /s
echo 'Removed Reports Directory'
set environmentName=QA
set appUrl=https://shop-qa.univarsolutions.com/
set countryName=USA

call npm run Smoke_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean

