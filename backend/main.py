import json
import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from database import engine
from models import Base
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_FILE = "incidents.json"

class Incident(BaseModel):
    id: str
    title: str
    severity: str
    status: str
    timestamp: str
    tactic: str

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