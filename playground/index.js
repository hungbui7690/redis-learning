/*
  Using GETSET for an atomic reset
  - pic

  - set key1 val1
  - get key1
  - getset key1 val1.2
  - get key1
  - keys *keys*
  - getset key2 1
  - set app:daily_tokens 10
  - get app:daily_tokens
  - decr app:daily_tokens
  - decr app:daily_tokens
  - decr app:daily_tokens
  - getset app:daily_tokens 10
  - get app:daily_tokens


*/
