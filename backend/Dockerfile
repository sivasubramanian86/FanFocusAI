# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt ./

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of your application code into the container
COPY . .

# Expose port 8080 (Cloud Run expects the container to listen on this port)
EXPOSE 8080

# Define environment variable for Python
ENV PYTHONUNBUFFERED=1

# Run the application
CMD ["python", "main.py"]

