#!/bin/bash

if ! which mkcert >/dev/null; then
  echo "    **************************************"
  echo "    *  Program mkcert is not installed."
  echo "    *  To install and use it on Mac, do:"
  echo "    *"
  echo "    *    brew install mkcert"
  echo "    *    mkcert -install"
  echo "    *"
  echo "    **************************************"
  exit
fi

source .env.development

mkdir -p certificates
cd certificates
mkcert $HOST
