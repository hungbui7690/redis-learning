/*
  Redis Database Design - A Chat Application P1
  - pic 1 to 9

  - srem users user1
  - rpush msg:room:lobby "user1:testmessage"
  - rpush msg:room:lobby "user2:testmessage"
  - lrange msg:room:lobby 0 -1
  - rpush msg:direct:user1:user2 "user1: test message"
  - rpush msg:direct:user2:user1 "user2: test message"
  - lrange msg:direct:user1:user2 0 -1

*/
