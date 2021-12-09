FROM node:16.13.1

WORKDIR /home/workspace/
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 5000

RUN buildDeps='vim locales' \
    && apt-get update \
    && apt-get install -y $buildDeps \
    && sed -i '/^#.* zh_CN.UTF-8 /s/^#//' /etc/locale.gen \
    && locale-gen 
ENV LANG='zh_CN.utf8'
CMD node src/js/index.js

