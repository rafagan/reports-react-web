FROM ubuntu:latest

ARG DEBIAN_FRONTEND=noninteractive
RUN apt update && apt install -y npm && npm install --global yarn

COPY ["package.json", "yarn.lock"]
RUN yarn install

COPY . ./app
EXPOSE 3000
WORKDIR /app

ENTRYPOINT ["yarn"]
CMD ["start"]
