# Importing the FastAPI class from the fastapi module
# This class is responsible for creating our web application (the server itself)
from fastapi import FastAPI

# Importing the "tasks" router from the routes folder
# Routers are used to organize the application's endpoints into separate modules
from app.routes import tasks 

# Creating an instance of the FastAPI application
# This "app" object will be the main entry point for out backend server
app = FastAPI(title="TaskFlow API") # Criar o servidor

# Including (registering) the router from "tasks.py"
# This connects the task-related routes (like/tasks) to our main application
app.include_router(tasks.router)

# Creating our first route - the root endpoint "/"
# When someon accesses the root URL (https://127.0.0.1.8000/) this function will be executed and return a JSON response
@app.get("/") 
def root():
    # Returning a dictionary (Python object) that FastAPI automatically converts to JSON
    return {"message": "Welcome to TaskFlow API!"}


