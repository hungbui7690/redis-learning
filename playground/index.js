/*
  Sets Operations - Intersection
  - pic

  - sadd k1 a b c d
  - sadd k2 c
  - sadd k3 a c e
  - smembers k1
  - smembers k2
  - smembers k3
  - sinter k1 k2 k3
  - 
  - sadd stocks:gainers AAPL MSFT IBM TSLA
  - sadd stocks:vol_gainers AAPL MSFT QQQ
  - sadd stocks:analyst AAPL C
  - smembers stocks:gainers
  - smembers stocks:vol_gainers
  - smembers stocks:analyst
  - sinter stocks:gainers stocks:vol_gainers stocks:analyst
  - sinterstore stocks:best stocks:gainers stocks:vol_gainers stocks:analyst
  - smembers stocks:best
  
*/
