/*
  Inspect internal Redis objects via OBJECT
  - pics

  - set hello 1
  - set hello1 "Test"
  - object refcount hello
  - object refcount hello1
  - object encoding hello
  - object encoding hello1
  - object idletime hello
  - object idletime hello1
  - lpush fruits "banana"
  - object refcount fruits
  - object encoding fruits
  - object idletime fruits


*/
