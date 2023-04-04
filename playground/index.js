/*
  Delete fields via HDEL
  - pic 

  - hset user:101 f1 v1 f2 v2
  - hgetall user:101
  - hdel user:101 f2
  - hgetall user:101
  - hdel user:101 f1 f2
  - hgetall user:101

*/
