import json
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from database import engine
from models import Base
from datetime import datetime, timedelta
import random
from ai_model import predict_incident

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

DB_FILE = "incidents.json"

class Incident(BaseModel):
    id: str
    title: str
    severity: str
    status: str
    timestamp: str
    tactic: str

@app.get("/user/me")
async def get_user_me():
    return{
        "username": "Admin_Analyst",
        "role": "SOC Level 3",
        "clearance": "Top_Secret",
        "stats": {
            "resolved_incidents": 142,
            "active_investigations": 3
        }
    }

def save_db(data):
    with open(DB_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

def load_db():
    if not os.path.exists(DB_FILE):
        print(f"--- Creating a new database file: {DB_FILE} ---")
        save_db([]) # We immediately create an empty list in the file
        return []
    with open(DB_FILE, 'r', encoding='utf-8') as f:
        return json.load(f)


@app.on_event("startup")
async def startup_event():
    load_db()
    print("--- The backend is up and running! ---")

@app.get("/incidents")
async def get_incidents():
    print("Request for a list of incidents")
    return load_db()

@app.post("/incidents")
async def create_incident(incident: Incident):
    print(f"A new incident has been received: {incident.id}")
    db = load_db()
    db.insert(0, incident.dict())
    save_db(db)
    return {"status": "success"}

@app.get("/")
async def root():
    return{
        "message": "CyberGuard API is Online",
        "status": "active",
        "version": "1.0.0"
    }
@app.get("/incidents/stats")
async def get_stats():
    # Simulate data for the last 7 hours
    stats = []
    now = datetime.now()
    for i in range(6, -1, -1):
        time_label = (now - timedelta(hours=i)).strftime("%H:00")
        stats.append({
            "time": time_label,
            "count": random.randint(10, 100)
        })
    return stats

@app.post("/analyze-threat")
async def analyze_threat(payload: dict):
    description = payload.get("description", "")
    prediction = predict_incident(description)
    return {
        "analysis": prediction,
        "confidence": 0.95,
        "ai_status": "verified_by_ai"
    }