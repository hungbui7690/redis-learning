/*
  How to define keys with expiration
  - pic

  - set 1 hello ex 120
    > key = 1, value = hello, expire = 120s

  - ttl 1
    > ttl <key_name> > time to live > show how many seconds key will be expired


  - expire 1 10
    > change the expire time of a key
    > expire <key> <time>
      > expire key 1 in 10s 


  - set 1 hello px 1000
    > px: time in ms 


  - pttl 1
    > similar to ttl > but return ms 


  - pexpire 1 100
    > set key 1 to expire in 100ms


*/
