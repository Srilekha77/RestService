#Steps to run this project from an IDE

* Clone this repository into your local directory.
* Open this project in any of the IDE's of your choice.
* This project uses SpringBoot.
* Run this application as a Java application. (The main class is located in src/java/com/boot/App.java)
* The SpringBoot application should start at localhost:8585/

# To start this application from command line, go to the directory and run the following maven command.
* mvn spring-boot:run

#Description:

* The Rest api is created using the SpringBoot framework. I choose springboot because it makes server integrations easy.
* The Rest api can be found under src/java/com/boot/controller/StringController.java
* The App.java is the main Java class where the SpringBoot applciation actually starts.

* The javascript page and the index.html which uses the rest api can be found under src/resources/public folde.
* Once the server is started, the browser will point to the index.html file.
* The index.html has a button element which onclick calls a method which triggers the restful api and gets the response back to the browser.
