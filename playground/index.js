/*
  Patterned Subscription
  - pic

  On Publishing side
  - publish news:tech "tech1"
  - publish news:biz "biz1"
  - publish news:tech "tech1"
  - publish news:tech "tech1"
  - publish news:politics "pol1"
  - publish news:biz "biz3"
  - publish topnews "top1"
  - publish topnews "top1"
  - 
  On Subscriber side
  - subscribe news:tech news:biz
  - ctrl + c
  - psubscribe news:*
  - ctrl + c
  - psubscribe news:* tech:*
  - ctrl + c
  - psubscribe news:* top*

*/
