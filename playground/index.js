/*
  From a RDBMS Table to Redis Data Structure
  - pic

  - hmset employee:1 first_name John last_name Doe age 30 hire_date 2020-01-01 salary 15000
  - hmset employee:2 first_name Betty last_name Kim age 30 hire_date 2020-10-01 salary 15000
  - hgetall employee:1
  - hgetall employee:2
  - scan 0 match employee:*
  - keys employee:*

*/
