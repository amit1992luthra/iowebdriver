cd ..
cd ..
rmdir reports /q /s
echo 'Removed Reports Directory'
set environmentName=Dev
set appUrl=https://shop-qa.univarsolutions.com/ca/en/
set countryName=Canada

call npm run Smoke_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean

