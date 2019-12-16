FROM node:10.13.0

# Install Nano
RUN apt-get update
RUN apt-get install -y nano

# Folder Structure Setup
RUN mkdir /myapp
COPY . /myapp
WORKDIR /myapp

# Install Dependencies
RUN npm install

# Run the app
RUN npm run build

EXPOSE 80
EXPOSE 3000
EXPOSE 3001

CMD ["npm", "run", "prod"]
