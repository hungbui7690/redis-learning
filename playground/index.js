/*
  Set Key and expiration using SETEX and PSETEX
  - pic

  - set num 1
  - get num
  - expire num 10
  - ttl num
  - setex num 120 1
  - ttl num
  - setex app:config:timeout 100 1
  - ttl app:config:timeout
  - psetnx num 10000 1
  - ttl num

*/
