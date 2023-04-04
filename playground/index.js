/*
  How to remove expiration from a key
  - pic

  - set 1 hello ex 120
  - ttl 1
  - persist 1
  - ttl 1
  - set 2 hello
  - persist 2
  - set hello ex 10
  - ttl 3

*/
