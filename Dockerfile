# Use an official Ubuntu image as the base image
FROM ubuntu:latest

# Set the working directory in the container
WORKDIR /app

# Update the package lists and install necessary packages
RUN apt-get update && apt-get install -y \
    curl \
    gnupg

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs

# Copy the application code into the container
COPY . .

# Install the required dependencies
RUN npm install

# Specify the command to run when the container starts
RUN npm run build

COPY entrypoint.sh /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]
