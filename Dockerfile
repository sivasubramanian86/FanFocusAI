# Use python:3.9-slim-buster as the base image
FROM python:3.9-slim-buster

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container
COPY . /app

# Install the packages using the requirements.txt file inside the backend folder
RUN pip install -r backend/requirements.txt --no-cache-dir

# Expose the port 8080
EXPOSE 8080

# Define an environment variable NAME
ENV NAME World

# Run the main.py file inside the backend folder when the container launches
CMD ["python", "backend/main.py"]