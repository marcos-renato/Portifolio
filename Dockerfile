FROM node:latest
WORKDIR /App
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
EXPOSE 5174
CMD ["npm", "run", "dev"]