/*
  Remove elements via LPOP and RPOP
  - pic 

  - lpush num 1 2 3 4 5 6 7 8 9 10
  - lrange num 0 -1
  - del num
  - lpush num 1 2 3 4 5 6 7 8 9 10
  - lrange num 0 -1
  - lpop num
  - lrange num 0 -1
  - rpop num
  - rpop num
  - lrange num 0 -1
  - lpop num 2
  - rpop num 1
  - lrange num 0 -1

*/
