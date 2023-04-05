/*
  Channel management via PUBSUB
  - pic

  - publish news1 "news1"
  - publish news2 "news2"
  - 
  - subscribe news1
  - pubsub channels *
  - subscribe news
  - 
  - pubsub channels top*
  - pubsub channels news1

//////////////////////////////////////

  UNSUBSCRIBE Channel Name
  - Unsubscribe channel name command will allow the client to unsubscribe to a particular channel. e.g. if you have a channel called news1 and you want to unsubscribe then you will run the following command;
      > UNSUBSCRIBE news1

  - Please note that as you had seen from the earlier videos that, when you are running the SUBSCRIBE command from the redis-cli, the only option for you to unsubscribe from the client is to run CRTL -C to quit. However lets say if you are interacting with Redis with a programming language like Python etc., then you can unsubscribe from the client with the above command.

  - What about unsubscribe from all channels?

  - You can use just simply run UNSUBSCRIBE without any channel name and client will be unsubscribed from all channels.

  - What if a client wants to unsubscribe channels based on a patterns e.g. unsubscribed from all news channels?

  - You can use the following command to do that;
      PUNSUBSCRIBE <pattern>
    i.e.
      > PUNSUBSCRIBE news*


  - Please note, when no patterns are specified, the client is unsubscribed from all the previously subscribed patterns. In this case, a message for every unsubscribed pattern will be sent to the client.


*/
