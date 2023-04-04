/*
  Move elements between lists via LMOVE
  - pic

  - rpush jobs:pending "job1" "job2" "job3"
  - lrange jobs:pending 0 -1
  - lmove jobs:pending jobs:completed left right
  - lrange jobs:pending 0 -1
  - lrange jobs:completed 0 -1
  - lmove jobs:pending jobs:completed left left
  - lrange jobs:pending 0 -1
  - lrange jobs:completed 0 -1
  - rpush orders:pending 1 2 3 4 5
  - lmove orders:pending orders:completed right left
  - lrange orders:pending 0 -1
  - lrange orders:completed 0 -1

////////////////////////////////////////

  - Lists contain strings that are sorted by their insertion order. With Redis Lists, you can add items to the head or tail of the lists, which is very useful for queueing jobs. Some of use cases for the list may be;
  - Social Networking Sites: Social platforms like Twitter use Redis Lists to populate their timelines or homepage feeds, and can customize the top of their feeds with trending tweets or stories.
  - RSS Feeds: We can create news feeds from custom sources where you can pull the latest updates and allow interested followers to subscribe to their favorite RSS feed.
  - Leader Boards: This is more of high use cases where Forums like Reddit and other voting platforms utilize Redis Lists to add articles to the leaderboard and even sort them by most viewed and voted entries.

////////////////////////////////////////

  - A list is just a sequence of ordered elements.
  - What's the downside? Accessing an element by index is very fast in lists implemented with an Array (constant time indexed access) and not so fast in lists implemented by linked lists (where the operation requires an amount of work proportional to the index of the accessed element).

  - You can think of list as an array
  - List are designed in such a way that adding new elements at the end of a list, is really fast.
  - The downside is that indexing into the list can be slow.
  - When this is required, Sorted Sets are a better option

    + LPUSH, RPUSH
      > Add Value at beginning, Add value at the end

    + LPUSHX, RPUSHX
      > Only push if key already exists

    + LLEN, LRANGE
      > Get number of values, Get values from Start to Stop

    + LINDEX, LSET, LINSERT
      > Get a value by index, Set a value by index, Add a value before or after another

    + LREM, LTRIM
      > Delete element from list, Trim list by range

    + LPOP, RPOP
      > Delete and Get the first element, Delete and Get the last element

*/
