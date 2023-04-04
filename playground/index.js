/*
  Installing Redis P1
  - there are some methods:
    + docker-compose 
    + docker run redis
      > then use "npx rbook" or rbook.cloud to connect to 
        > host=127.0.0.1, port=6379
    + WSL2 or VMWare


///////////////////////////////////////////////////////

  - need to install on WSL2 or VMWares 

  - Run this first:
    > curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg

    > echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

    > sudo apt-get update
    > sudo apt-get install redis

  - Start: 
    > sudo service redis-server start

  - Connect: 
    > redis-cli
      + ping
      + ping "Hello"


*/
