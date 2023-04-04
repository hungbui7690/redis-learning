/*
  Trim a list using LTRIM
  - pic

  - del num
  - lpush num 1 2 3 4 5 6 7 8 9 10
  - lrange num 0 -1
  - ltrim num 0 -1
  - lrange num 0 -1
  - ltrim num 1 -1
  - lrange num 0 -1
  - ltrim num 2 -1
  - lrange num 0 -1

*/
