/*
  Scanning Keys with SCAN
  - pic

  - flushdb
  - keys *
  - debug populate 50
  - keys *
  - scan 0
  - scan 2
  - scan 21
  - scan 21 count 15
  - keys "*keys"
  - scan 0 match *
  - scan 0 match *key:?
  - scan 2 match *key:?
  - type key:1
  - set hello 1
  - type hello
  - scan 0 match *h* type string
  - scan 0 match *h* type string count 30

////////////////////////////////////////////////////

  - The Redis string data structure is the most versatile data structures that can be used across multiple use cases;
  - For serving static websites pages. Redis.io site uses strings to serve all static page contents
  - Caching - To store most common, frequently used data within an application or a website.
  - Counters are excellent choice for strings e.g Daily website visitors and more.
  - Master Catalog and configuration e.g. You can store all the application default or user based configuration settings in respective strings key e.g.

    > SET app:config:website www.KlickAnalytics.com

////////////////////////////////////////////////////

  - The Redis String type is the simplest type of value you can associate with a Redis key.
  - String is not the best term for this type because it is used to hold numeric types as well.
  - Internally it is held as a byte array.
  - A string is a simple scalar that can hold a single value or it can hold an XML or a JSON document as well
  - A string value can't be bigger than 512 MB.

    + SET, SETNX, MSET, MSETNX
      > Set value, Set value if key does not exist, Set multiple values, Set multiple values if none of the keys exist

    + GET, MGET, GETSET
      > Get value, Get multiple values, Set value, return old value

    + PSETEX, SETEX
      > Set with expiry in seconds and milliseconds

    + INCR, INCRBY, INCRBYFLOAT
      > Increment integer, Add to integer, Add to float

    + DECR, DECRBY
      > Decrement integer, Subtract from integer
      
*/
