/*
  Display data in reverse score order
  - pic

  - zadd users:followers 1 John 100 David
  - zrange users:followers 0 -1 withscores
  - zrevrange users:followers 0 -1
  - zrevrange users:followers 0 -1 withscores

*/
