FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY src/ .

# Expose the port the app runs on
EXPOSE 3000

# Specify the command to run the application
CMD ["node", "app.js"]