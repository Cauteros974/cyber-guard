from sqlalchemy import Column, String
from database import Base

class Incident(Base):
    __tablename__ = "incidents"
    