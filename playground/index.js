/*
  Find length of a list via LLEN
  - pic

  - rpush app:config:lst_supported_lang "English" "Japanese"
  - rpush app:config:lst_supported_lang "English" "Japanese" "Arabic" "Chinese"
  - lrange app:config:lst_supported_lang 0 -1
  - llen app:config:lst_supported_lang

*/
