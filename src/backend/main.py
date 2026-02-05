from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
from pydantic import BaseModel
from typing import List
import datetime

app = FastAPI()

app.add_middleware (
    CORSMiddleware,
    allow_origins = ["*"], #Fake address
    allow_methods = ["*"],
    allow_headers=["*"],
)

#Data model
class Incident(BaseModel):
    id: str
    title: str
    tactic: str
    status: str

dn_incidents = [
    {
        "id": "INC-8821",
        "title": "Brute Force on SSH",
        "tactic": "Credential Access",
        "status": "open"
    }
]

@app.get("incident", response_model=List[Incident])
async def get_incident():
    return db_incidents