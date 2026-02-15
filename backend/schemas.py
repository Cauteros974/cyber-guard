from pydantic import BaseModel
from uuid import UUID

class IncidentBase(BaseModel):
    title: str
    status: str
    source: str
    tactic: str
    
class IncidentCreate(IncidentBase):
    pass

class IncidentUpdate(IncidentBase):
    title: str
    severity: str
    