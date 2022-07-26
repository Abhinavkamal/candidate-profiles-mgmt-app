FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]


#docker build -f Dockerfile -t server .
# docker run -it -p 4002:3002 client