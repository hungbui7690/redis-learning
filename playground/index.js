/*
  Using SETS for unique data
  - pic

  - scard cars
  - smembers cars
  - scard numbers
  - smembers numbers
  - scard a
  - sadd unique_ips 1.1.1.5
  - sadd unique_ips 1.1.1.2
  - sadd unique_ips 1.1.1.3
  - sadd unique_ips 1.1.1.4
  - sadd unique_ips 1.1.1.5
  - smembers unique_ips
  - sadd unique_ips 1.1.1.0
  - smembers unique_ips
  - sadd amazon:unique_categories electronics computers
  - smembers amazon:unique_categories
  - sadd amazon:unique_categories handmade gardeing outdoor sports
  - smembers amazon:unique_categories
  - smembers amazon:unique_categories
  - sadd twitter:hashtags help money trainings coding database
  - smembers twitter:hashtags
  - sadd twitter:hashtags help money trainings coding database stockmarkets klickanalytics
  - smembers twitter:hashtags
  
*/
