cd ..
cd ..
rmdir reports /q /s
echo 'Removed Reports Directory'
set environmentName=Prod
set appUrl=https://www.univarsolutions.co.uk/
set countryName=Canada

call npm run Smoke_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean

