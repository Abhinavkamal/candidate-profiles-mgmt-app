FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
CMD ["npm", "run", "start"]


#docker build -f Dockerfile -t client .
# docker run -it -p 4001:3001 client