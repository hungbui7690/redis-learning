/*
  Update an element value via LSET
  - pic

  - rpush num 1 2 3 4 5
  - lrange num 0 -1
  - lset num 2 30
  - lrange num 0 -1
  - lset num 4 50
  - lrange num 0 -1
  - lset num -1 50
  - lset num -1 100
  - lrange num 0 -1
  - lset num 100 199
  - lrange num 0 -1

*/
