# AccountsManager

I am using Spring data-rest on the server side and Sencha ExtJS v4.2.2 on the client side. The build tool is Gradle.
There is a task buildSencha to build the ExtJS application. This task requires Sencha Cmd and Ruby installed. I used Sencha Cmd (4.0.2.67) and ruby 2.0.0p353 (2013-11-22) [x64-mingw32], but more recent versions work as well. A built ExtJS application is also included in /WebContent/build/production/AccountsManager/ and /src/main/resources/static/ and /build/libs/AccountsManager.jar is a Spring Boot application with embedded Tomcat.

Clone the repo:
git clone git@github.com:muxob/AccountsManager.git

Build:
gradlew clean build

Run
java -jar build/libs/AccountsManager.jar