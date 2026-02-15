from pydantic import BaseModel
from uuid import UUID

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
    
    class Config:
        from_attributes = True
    