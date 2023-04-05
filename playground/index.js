/*
  Unique Website visitors via HyperLogLog
  - pic
  
  - pfadd hll1 1 2 3 4
  - pfadd hll1 1
  - pfcount hll1
  - pfadd hll2 2 3 4 5
  - pfadd hll3 20 30 40
  - pfmerge hll hll1 hll2 hll3
  - pfcount hll
  - 
  - pfadd visitors:main_page 1 2 3 4
  - pfadd visitors:stocks 1 2 3 4
  - pfadd visitors:company 1 2
  - pfcount visitors:main_page
  - pfcount visitors:stocks
  - pfcount visitors:main_page
  - pfmerge visitors:total visitors:main_page visitors:stocks visitors:main_page
  - pfcount visitors:total
  - pfadd visitors:main_page 1 2 3 4 5 6 7 8 9 10
  - pfmerge visitors:total visitors:main_page visitors:stocks visitors:main_page
  - pfcount visitors:total

///////////////////////////////////////////

  To get unique data usually you need more memory, since bigger the input data, more are the chances of getting a stable output. HyperLogLog is good at this since you get great performance at low computation cost, and a small amount of memory. HyperLogLog can be used in various situations like;

  - Counting unique visitors
  - Creating unique in a book or books
  - Keeping best stocks of all times
  - Create unique names of a products, services, category
  - A situation where you are not worries about the elements of the datasets, but its counts
  - Create unique names of students in a class and many more.

///////////////////////////////////////////

  - A HyperLogLog is a probabilistic data structure
  - Used in order to count unique things (technically this is referred to estimating the cardinality of a set).
  - Encoded as a Redis string
  - Conceptually the HLL (HyperLogLog) is like using Sets to do the same task.
  - They are not one hundred percent accurate
  - By using HyperLogLogs we can save a tremendous amount of memory.

    + PFADD, PFCOUNT
      > Append one or more elements, count number of elements

    + PFMERGE
      > Merge elements from multiple keys

*/
