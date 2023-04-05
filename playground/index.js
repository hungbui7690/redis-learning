/*
  Atomic operations by ZINCRBY
  - pic

  - zrange users:followers 0 -1 withscores
  - zincrby users:followers 5 adam
  - zrange users:followers 0 -1 withscores
  - zincrby users:followers -5 scott
  - zrange users:followers 0 -1 withscores
  - zincrby users:followers 5 hans
  - zrange users:followers 0 -1 withscores


*/
