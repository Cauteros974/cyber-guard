from pydantic import BaseModel
from uuid import UUID
from datetime import datetime
class IncidentBase(BaseModel):
    title: str
    status: str
    severity: str
    source: str | None = None
    tactic: str | None = None
    technique: str | None = None
    
class IncidentCreate(IncidentBase):
    pass

class IncidentUpdate(BaseModel):
    title: str | None = None
    severity: str | None = None
    status: str | None = None
    
class IncidentOut(IncidentBase):
    id: UUID
    created_at: datetime
    class Config:
        from_attributes = True
    