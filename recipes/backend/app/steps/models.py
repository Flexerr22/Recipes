from sqlalchemy import Column, Integer, String, ForeignKey, Text
from sqlalchemy.orm import relationship
from app.database import Base

class Steps(Base):
    __tablename__ = "steps"
    id = Column(Integer, primary_key=True)
    recipe_id = Column(Integer, ForeignKey('recipes.id'), nullable=False)
    description = Column(Text, nullable=False)
    photo_url = Column(String)
    step_number = Column(Integer, nullable=False)