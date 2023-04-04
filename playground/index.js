/*
  Find matching elements via LPOS
  - pic

  - rpush mykey a b a a c d e f a
  - lrange mykey 0 -1
  - lpos mykey "a"
  - lpos mykey "a" rank 0
  - lpos mykey "a" rank 1
  - lpos mykey "a" rank 2
  - lpos mykey "a" rank 3
  - lpos mykey "a" rank -1
  - lpos mykey "a" rank -2
  - lpos mykey "a" count
  - lpos mykey "a" count 0
  - lpos mykey "a" count 1
  - lpos mykey "a" count 2
  - lpos mykey "a" count 3
  - lpos mykey "a" count 4
  - lpos mykey "a" rank 1 count 0
  - lpos mykey "a" rank -1 count 0
  - lpos mykey "a" rank -1 count 1
  - lpos mykey "a" rank -1 count 2
  - lpos mykey "a" rank -1 count 2 maxlen 1
  - lpos mykey "a" rank 1 count 2 maxlen 1
  - lpos mykey "a" rank 1 count 2 maxlen 10
  - lpos mykey "a" rank 1 count 2 maxlen 100
  - lpos mykey "a" rank 1 count 0 maxlen 5000

*/
