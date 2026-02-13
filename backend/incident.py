from sqlalchemy import Column, String
from database import Base

class Incident(Base):
    __tablename__ = "incidents"
    
    id: Column(String, primary_key=True)
    title: Column(String)
    severity = Column(String)