

# FOODIE_CLIENT: An Angular CLI with Ngrx Demo with ASP.NET Core Web API

Version 1.0.1
March 2018

## Premise
This application was originally based upon an Android App I created for my mobile development certification at the University of Toronto. The "Foodie Client" was an idea I maintained to help out dietitians create meal plans. The app allows a dietitian as user to enter in meals with calorie information. Then a user would be able to use the app to get a random meal.

![Screenshot](Screen1.jpg)

##  "Framework-Level" / Infrastructure Technologies Employed

### Principle Tech
- [Angular CLI](https://cli.angular.io/) - for the front end components
- [Microsoft .NET Core](http://bit.ly/dotnetcoreonmac) - for the back end service
- [MS SQL Server Express](http://bit.ly/sqlserveronmacviadocker)) - for Macs, you can install it via Docker
- [Android SDK](http://bit.ly/androidstudioandsdk)
- [Cordova](https://cordova.apache.org) - to contain everything and make it run on web and mobile
- [ImageMagick](http://bit.ly/imagemagickmain) - (installed via HomeBrew)

### Ngrx Platform (http://bit.ly/ngrxfx4)
It's like Redux from the React world, except for Angular
- [Ngrx Store](http://bit.ly/ngrxstore)
- [Ngrx Effects](http://bit.ly/ngrxfx4)

### Notes
This project is a migration of an older project, originally intended to illustrate Angular with a choice of backend  (.NET backend, or a Tomcat / Servlet backend, etc) . This was for internal use at Red Academy, as a prototype.

- npm install to setup front end
- npm start to run client

###  Readings
- [Ngrx Intro](http://bit.ly/NgrxIntro)

## IDEs Employed

- Microsoft Visual Studio Community Edition (7.x) For .NET Core Service, DTOs
- Jetbrains Webstorm (2017.3.5) For Angular Template FrontEnd

## Issues
- MS Visual Studio Community Edition (on my mac) dialogs all contain scrambled text. Have posted on stack overflow to get assist on solution (makes it difficult to figure out some items)


##  TODO:
- Full tutorial Writeup (video, article) - on the bucket list
- Update deprecated packages and test
-- nodemailer@2.7.2: All versions below 4.0.1 of Nodemailer are deprecated. See https://nodemailer.com/status/
-- node-uuid@1.4.8: Use uuid module instead