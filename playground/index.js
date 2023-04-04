/*
  Counting via HINCRBY and HINCRBYFLOAT
  - pic

  - hgetall user:101
  - hkeys user:101
  - hset user:101 score:-10
  - hgetall user:101
  - hset user:101 commission 0.25
  - hgetall user:101
  - hincrbyfloat user:101 commission 1.2
  - hgetall user:101
  - hincrbyfloat user:101 commission -1.2
  - hgetall user:101

*/
