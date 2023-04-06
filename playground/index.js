/*
  Using redis-cli to scan keys
  - pic

  - set name1 1
  - set name2 2
  - set name3 e
  - set name4 4
  - debug populate 50
  - redis-cli --scan
  - redis-cli --scan --pattern '*'
  - redis-cli --scan --pattern 'k*'
  - redis-cli --scan --pattern '*key*'
  - redis-cli --scan --pattern '*name*'
  - redis-cli --scan --pattern '*' > keys.csv
  - cat keys.csv
  - redis-cli -h

*/
