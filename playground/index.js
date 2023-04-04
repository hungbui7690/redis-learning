/*
  Remove element via LREM
  - pic

  - flushdb
  - rpush mykey "one" "one" "two" "three" "one"
  - lrange mykey 0 -1
  - lrem mykey 0 "two"
  - lrange mykey 0 -1
  - lrem mykey 1 "one"
  - lrange mykey 0 -1
  - rpush mykey "five"
  - lrange mykey 0 -1
  - lrem mykey -1 "one"
  - lrange mykey 0 -1

*/
