cd ..
cd ..
rmdir reports /q /s
echo 'Removed Reports Directory'
set environmentName=Dev
set appUrl=https://shop-dev.univarsolutions.co.uk/
set countryName=UK

call npm run Smoke_Capabilities
node_modules\.bin\allure generate reports -o allure-Report/chrome --clean
