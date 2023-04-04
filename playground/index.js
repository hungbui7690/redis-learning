/*
  Get random fields via HRANDFIELD
  - pic

  - hkeys user:101
  - hrandfield user:101
  - hrandfield user:101 -1
  - hrandfield user:101 -2
  - hrandfield user:101 -2 withvalues
  - hrandfield user:101 20 withvalues
  - hkeys user:101

////////////////////////////////////////////

  - Redis Hashes are maps between string fields and string values. They are the go-to data type if you need to essentially create a container of unique fields and their values to represent objects.
  - User Profiles: Redis Hash data structures can be used to store application objects like Users information and more. Many web applications use Redis Hashes for their user profiles, as they can use a single hash for all the user fields, such as name, surname, email, password, etc.e.g. you can use
    > HSET user:101 name "Joe" age 30 country "USA"
  - User Posts: Some of the popular social platforms like instagram uses Redis Hashes for various purposes e.g.
  - To map all the archived user photos or posts back belong to  a single user. The Redis Hashes hashing mechanism allows them to look up and return values very fast, fit the data needed in memory, and leverage data persistence in the event one of their servers dies.

  - Storing Multi-Tenant Metrics: Multi-tenant metrics can utilize Redis hashes to store critical informations e.g They can use hash data structures to record and store their product and sales metrics in a way that guarantees solid separation between each tenant, as hashes can be encoded efficiently in a very small memory space.
  - You should use Redis Hashes whenever possible, as you can use a small Redis instance to store millions of objects.

//////////////////////////////////////////////

  - hashes are useful for representing objects
  - Hashes contain one or more fields.

    + HSET, HSETNX, HMSET
      > Set field value, Set field value if field does not exist, Set multiple field values
    
    + HGET, HMGET
      > Get field value, Get multiple field values

    + HLEN, HKEYS, HVALS, HGETALL
      > Get Number of fields, Get all field keys, Get all field values, Get all fields and values

    + HEXISTS, HDEL
      > Check field exists, delete field

    + HINCRBY, HINCRBYFLOAT
      > Increment field integer value, Increment field float value

*/
