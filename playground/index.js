/*
  Sets Operations - Difference
  - pic

- smembers k1
- smembers k2
- smembers k3
- sdiff k1 k2 k3
- 
- smembers stocks:gainers
- smembers stocks:vol_gainers
- smembers stocks:analyst
- sdiff stocks:gainers stocks:vol_gainers stocks:analyst
- sdiffstore stocks_diff stocks:gainers stocks:vol_gainers stocks:analyst
- smembers stocks_diff

///////////////////////////////////

  - Redis Sets can be used in a lot of scenarios like;
    + Unique user tracking visiting a website

    + Holding unique list of items like user groups, user avtar names, categories, products names, country codes etc.

    + Sharded data of unique values for an application

    + IP Tracking - Storing unique IP addresses to track visitors

    + Implementing a product recommendation based on a user action, similar to Amazon feature where they display 'People also buy these items'

    + Analyzing Ecommerce Sales - Many online e-commerce websites use Redis Sets to analyze customer behavior, such as searches or purchases for a specific product category or subcategory. For example, an online bookstore owner can find out how many customers purchased technology books in Technology section.

    + Inappropriate Content Filtering - For any app that collects user input, its a good idea to implement some kind of content filtering for any inappropriate words, and we can do this with Redis Sets by adding words youd like to filter to a SET key and the SADD command. e.g.

    + SADD bad_words "word1" "word2"

////////////////////////////////////////////////

  - Redis Sets are unordered collections of strings.

  - They cannot have duplicate values

  - Sets are good for expressing relations between objects

    + SADD, SMOVE, SREM, SPOP
      > Add one or more members, Move a member from one set to another, Remove one or more members, Remove and return one or multiple random members

    + SCARD, SMEMBERS, SISMEMBER, SRANDMEMBER
      > Get number of members, Get all members, Test if member exists, Get one or more random members

    + SUNION, SUNIONSTORE
      > Get all keys from all sets, no duplicates, same operation but store results in a new key

    + SINTER, SINTERSTORE
      > Get keys that exist in all sets only, same operation but store results in a new key

    + SDIFF, SDIFFSTORE
      > Return keys from the first set that are not in the subsequent sets, same operation but store results in a new key

*/
