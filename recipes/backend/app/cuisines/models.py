from app.database import Base
from sqlalchemy import Column, String, Integer

class Cuisines(Base):
    __tablename__ = "cuisines"
    id = Column(Integer, primary_key=True, nullable=False)
    cuisines_name = Column(String, nullable=False, unique=True)
