#!/bin/bash

i=0

ARRAY=()

ARRAY+=[
while [ $i -lt 5 ]
do
  echo "Number: $i"
  CALL=$(curl -H "Content-Type: application/json" "$API" | jq '.words')
  ARRAY+=$CALL
  if [[ "$i" -lt 4 ]]; then
    ARRAY+=,
  fi

  ((i++))
done
ARRAY+=]

RESULT=$(echo "$ARRAY" | jq 'flatten')

echo $RESULT > "../db/words.json"