from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware = [
    CORSMiddleware,
    allow_origins = ["*"],
    allow_methods = ["*"],
]