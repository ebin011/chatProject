FROM mhart/alpine-node-auto
RUN mkdir Dockerfile
WORKDIR Dockerfile
COPY . .
RUN npm install express
RUN npm install 
CMD ["node","index.js"]