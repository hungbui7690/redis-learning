/*
  Get multiple fields values via HMGET
  - in case we want to select specific fields, we don't can't use HGETALL
    > HMGET <field> <field>

  - pic
  
  - hgetall user
  - rename user user:101
  - hgetall user:101
  - hmget user:101 fname lname
  - hmget user:101 fname lname lname1
  - hmget user:101 age fname lname


*/
