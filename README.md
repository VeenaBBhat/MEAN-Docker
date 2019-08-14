# Movie Database App using Angular and Node-Express
This project is about taking a online movie database instance using Node-Express application and querying the database through the UI created using Angular. The Angular interface created provides mechanism to search a movie by name and by id and displays the details accordingly. While there are many online movie databases available, this project uses http://www.omdbapi.com

##List of installed softwares
1. Node
2. Express
3. Angular-cli
4. git
5. docker and docker-compose - docker toolbox used here since the windows ver<10

## Steps followed to setup the instance
1. Install docker on your system	
2. Pull the instance from git
3. From the docker quickstart terminal type the below command to run Express and Angular applications
     `docker-compose up`
4. Go to http://localhost:4200/ and check the Angular home page
5. Access the UI for fetching movie details by name and id accordingly