#!/bin/bash

docker build . --tag reports-react-web
docker image ls
docker rm reports-react-web
docker run --name reports-react-web -p 3000:3000 reports-react-web