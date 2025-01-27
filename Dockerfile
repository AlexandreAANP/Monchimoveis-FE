# Use the official Node.js image as the base image to build the React app
FROM node:22-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

ENV PATH /app/node_modules/.bin:$PATH

RUN chmod +x /app/node_modules/.bin/*

# Build the React app
RUN npm run build

# Use the official Nginx image to serve the static files
FROM nginx:latest

# Copy the built files from the previous stage to the Nginx html directory
COPY --from=build /app/out /usr/share/nginx/html

# RUN rm /etc/nginx/conf.d/default.conf
# Copy custom Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the port Nginx will run on
EXPOSE 8899

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]