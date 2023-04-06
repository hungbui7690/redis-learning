#!/bin/bash
redis-cli --scan > all.keys
while read -r key
do
  value=$(redis-cli get "$key")
  echo $key '|' $value
done < all.keys
