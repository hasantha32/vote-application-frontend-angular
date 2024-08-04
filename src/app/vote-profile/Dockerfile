# Step 1: Build the Angular application
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build --prod

# Step 2: Serve the Angular application using Nginx
FROM nginx:alpine

# Copy the built Angular application from the build stage to the Nginx HTML folder
COPY --from=build /app/dist/your-angular-app /usr/share/nginx/html

# Copy a custom Nginx configuration file if needed
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
