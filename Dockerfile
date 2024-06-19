# Use an official Node.js runtime as a parent image
# FROM node:16-alpine
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Ensure permissions are set correctly
RUN chown -R node:node /app

# Switch to a non-root user
USER node

# Copy the rest of the application
COPY . .

# Build the React application
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]