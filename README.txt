#About Framework
> WebdriverIO framework that Mocha,Chai, Page Object model.
> Framework is able to test web apps using Javascript.
> Framework followed the page object model, Xpath and Css locators and page wise actions.
> Framework accept the assertion from chai.

#Test Case
> Test case will pass when run in the following configurations:
 *Run Individually on locally in head mode.
 *Run Individually on locally in headless mode.
 *Run Individually on Jenkins Server.
 *Ensure that each test case should run successfully in multiple environment and Countries apps
 
 
# Naming Conventions
	-File name and directory name are in Camel case followed by "_"
	-Methods and variable names should use camelCase
	-Tests files should be in camelCase and ends with .js file extension.
	-Always use common wdio action methods from commonAction class under Utilities folder in the Framework.


#Prerequisite for framework
1. Ensure a JDK 8 compatible version of java is installed.  You can check by running `java -version` inside Terminal.

    Example of java being installed correctly:
    
    java -version
    openjdk version "1.8.0_292"
    
2. Download and Install Node (https://nodejs.org/en/download/)
   
     - Node v12.21.0 is compatible with the framework
	 - npm with v6.14.11 
	 
	 To check the version after installed
	 node -v
	 npm -v
	 
3. Installing project
 
	-Clone the project (git clone 'https://github.com/srinathband1/ecommerce-qa-automation-webDriverIO.git')
	-Open project using any IDE
	-Install node modules (run command --> npm i or npm install)
	
    

#Run the tests
	- Mention spec file path in configuration file (Ex: ecommerce-qa-automation-webDriverIO/Configuration/Univar_Canada/Common_conf.js)
	- Mention same suite name in batch/shell file. 
	- Declare respective suite path in package.json file including argument it will accept
	- Pass arguments from batch/shell file.
	- Run a test suite using batch in terminal(.bat) or shell(.sh) file. (bash QA.sh for Mac and QA.bat for windows)
	

#Configuration file
	-Always mention latest chrome driver version before run in configuration file (Ex: ecommerce-qa-automation-webDriverIO/Configuration/Univar_Canada/Common_conf.js).
	-Create configuration file suite wise and define respective capabilities in the common configuration file.
	-Under Respective capabilities in Common conf file we will mention spec file path.
	