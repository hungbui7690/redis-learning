/*

  > Step 1:
    + docker-compose up --build -d

  > Step 2a: This will run redis-cli
    + docker-compose ps
    + docker-compose run rcli
      > open redis-cli

  > Step 2b: This will run the container with Interactive Mode
    + docker-compose run rcli sh

  > Step 2c: 
    + docker-compose exec -it redis sh

/////////////////////////////////////////////

  docker-compose up --build -d
  docker-compose run -d rcli
  docker-compose exec -it rcli sh

/////////////////////////////////////////////

  - npx rbook
      + http://localhost:3050 > rbook link







































*/
