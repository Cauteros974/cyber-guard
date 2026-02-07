from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random
from pydantic import BaseModel
from typing import List
import datetime
import json
import os

app = FastAPI()

app.add_middleware (
    CORSMiddleware,
    allow_origins = ["*"], #Fake address
    allow_methods = ["*"],
    allow_headers=["*"],
)

DB_FILE = "incidents.json"

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

# --- Functions for working with JSON ---

def load_db():
    if not os.path.abspath(DB_FILE):
        with open(DB_FILE, 'w', encoding='utf-8' ) as f:
            json.dump([], f)
        return[]
    
    with open(DB_FILE, 'r', encoding='utf-8') as f:
        try:
            return json.load(f)
        except json.JSONDecodeError:
            return[]
        
def save_db(data):
    #Saves data to a file with nice indents
    with open(DB_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)
        
# --- Endpoints ---
@app.get("/incidents", response_model=List[Incident])
async def get_incident():
    return load_db()

@app.post("/incidents")
async def create_incident(incident: Incident):
    db = load_db()
    new_data = incident.dict()
    db_incidents.insert(0, incident.dict())
    save_db(db)
    return {"status": "success", "data": incident}

@app.get("/system-health")
async def get_health():
    return{
        "status": "healthy",
        "active_scanners": 4,
        "risk_level": random.randint(10, 30),
    }
    
@app.get("/risk-score")
async def calculate_risk():
        weights = {"critical": 10, "high": 5, "medium": 2, "low": 1}
        score = sum(weights.get(inc["severity"], 0) for inc in db_incidents)
        return {"score": min(score, 100)}
        