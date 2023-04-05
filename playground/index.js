/*
  Lexicographical order
  - pic

  - zadd num1:ss 1 a 2 b 3 c 3 d
  - zrange num1:ss 0 -1 withscores
  - zadd num2:ss 1 a 2 b 3 c 4 c
  - zrange num2:ss 0 -1 withscores
  - zadd num3:ss 1 a 2 b 3 c 4 ca
  - zrange num3:ss 0 -1 withscores
  - zrevrange num3:ss 0 -1 withscores
  
*/
