/*
  Rank stocks with ZRANK
  - pic

  - zadd stocks:top 1 AAPL 2 MSFT 3 F 4 QQQ 5 C 6 IBM 7 TSLA 8 AMZN 9 NIO 10 SPCE
  - range stocks:top 0 -1 withscores
  - zrevrange stocks:top 0 -1 withscores
  - zrange stocks:top 0 -1 withscores
  - zrank stocks:top AAPL
  - zrank stocks:top MSFT
  - zrank stocks:top F
  - zrank stocks:top SPCE
  - zrank stocks:top AAPL SPCE
  - zrank stocks:top AAPL
  - zrank stocks:top AAPL1
  - zrevrank stocks:top APPL
  - zrevrank stocks:top AAPL
  - zrange stocks:top 0 -1 withscores
  - zrevrank stocks:top AAPL
  - zrevrank stocks:top SPCE
  - zadd stocks:0930 1 MSFT 2 AAPL
  - zadd stocks:1200 1.2 MSFT -3.45 AAPL
  - zadd stocks:EOD 1.5 MSFT 1.25 APPL

///////////////////////////////////////////

  You can call sorted sets a superset version of sets as it carries all the features of sets, only that sets have no order while sorted sets associate every member with a numeric score.
  + Multiplayer Gaming: On an online gaming applications which required to update multiple games scores list and frequently load top score performers.
  + Questions and Answers / Community forums: Redis.io website uses Sorted Sets to handle to rank the highest voted answers for each question. In addition stack overflow uses a similar setup for their Q&A setups.

///////////////////////////////////////////

  - Sorted sets are a data type which is similar to a mix between a Set and a Hash
  - Sorted sets are implemented via a dual-ported data structure containing both a skip list and a hash table
  - Adding elements and retrieving sorted elements is extremely fast.
  - Like Hashes, sorted sets store multiple fields called members, and their numerical values called scores
  - All the members are always unique
  - They are ordered based on their scores
    + ZADD, ZINCRBY
      > Add one or more members or update score, Increment the score of a member, Remove one or more members

    + ZCARD, ZCOUNT, ZSCORE, ZRANK
      > Get number of members, Count members within sort key (score) range, Get the score associated with the given member, Determine the index of a member

    + ZRANGE, ZRANGEBYLEX, ZRANGEBYSCORE, ZLEXCOUNT
      > Get members sorted by sort key (score), Return a range of members by lexicographical range, Return a range of members by score, Count the number of members between a given lexicographical range

    + ZREM, ZREMRANGEBYLEX, ZREMRANGEBYRANK, ZREMRANGEBYSCORE
      > Remove one or more members, Remove all members between the given lexicographical range, Remove all members within the given indexes, Remove all members within the given scores

    + ZREVRANGE, ZREVRANGEBYSCORE, ZREVRANK, ZREVRANGEBYLEX
      > Return a range of members by index with scores ordered from high to low, Return a range of members by score, with scores ordered from high to low, Determine the index of a member with scores ordered from high to low, Return a range of members by lexicographical range, ordered from higher to lower strings

    + ZINTERSTORE, ZUNIONSTORE
      > Get keys that exist in all sets only and store the resulting sorted set in a new key, Add multiple sorted sets and store the resulting sorted set in a new key

*/
