/*
  View latest stock prices via LINDEX
  - get the element based on the index
  - pic

  - lrange dept 0 -1
  - lindex dept 0
  - lindex dept 1
  - lindex dept 2
  - lindex dept 3
  - lindex dept -1
  - lindex dept -2
  - lindex dept 10
  - lindex dept -10
  - lpush MSFT:close_prices 10 10.20 11.00 20.00
  - lrange MSFT:close_prices 0 -1
  - lindex MSFT:close_prices - 1
  - lindex MSFT:close_prices 0
  - del MSFT:close_prices
  - rpush MSFT:close_prices 10 10.20 15.00
  - lrange MSFT:close_prices 0 -1
  - lindex MSFT:close_prices -1
  - lindex MSFT:close_prices -2

*/
