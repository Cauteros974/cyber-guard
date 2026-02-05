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
    severity: str
    timestamp: str

db_incidents = [
    {
        "id": "INC-8821",
        "title": "Brute Force on SSH",
        "tactic": "Credential Access",
        "status": "open",
        "severity": "high",
        "timestamp": "2026-02-05T14:30:00Z",
    }
]

@app.get("/incidents", response_model=List[Incident])
async def get_incident():
    return db_incidents

@app.post("/incidents")
async def create_incident(incident: Incident):
    db_incidents.insert(0, incident.dict())
    return {"status": "success", "data": incident}

@app.get("/system-health")
async def get_health():
    return{
        "status": "healthy",
        "active_scanners": 4,
        "risk_level": random.randint(10, 30),
    }