/*
  From multi primary keys to Redis Structure
  - pics 

  - hmset order:product:10248:11 unit_price 14 quantity 12 discount 0
  - hmset order:product:10248:42 unit_price 9.8 quantity 10 discount 0
  - hgetall order:product:10248:11
  - hgetall order:product:10248:42
  - keys order:product:10248:*
  - keys order:product:*:11
  - keys order:product:*:42
  - keys order:product:*:*


*/
