/*
  Sets Operations - Union
  - pic

  - sadd num1 1 2 3 4 5
  - sadd num2 2 4 6 8 10
  - smembers num1
  - smembers num2
  - sunion num1 num2
  - sadd num3 20 40 50
  - sunion num1 num2 num3
  - 
  - sadd tickets:pending 1 2 3 4 5
  - sadd tickets:completed 10 20 30 40 50
  - smembers tickets:pending
  - smembers tickets:completed
  - sunion tickets:pending tickets:completed
  
*/
