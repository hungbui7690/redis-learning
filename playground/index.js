/*
  Using URL, echo to list all keys
  - pic

  - URL=redis://localhost:6379
  - echo "KEYS *" | \
  - redis-cli -u $URL | \
  - sed 's/^/GET /' | \
  - redis-cli -u $URL

*/
