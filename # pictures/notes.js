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








#### docker-compose.yaml
version: '3'
services:
  redis:
    image: 'redis:latest'
  rcli:
    image: 'redis:latest'
    links:
      - redis
    volumes:
      - redis-data:/data
    command: redis-cli -h redis
volumes:
  redis-data:
    driver: local
    driver_opts:
      type: 'none'
      o: 'bind'
      device: '/data'





























*/
