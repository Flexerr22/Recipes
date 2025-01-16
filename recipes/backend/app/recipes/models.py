from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database import Base


class Recipes(Base):
    __tablename__ = "recipes"
    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False, unique=True)
    description = Column(String)
    author = Column(Integer, ForeignKey("users.id"), nullable=False)
    cuisin = Column(Integer, ForeignKey("cuisines.id"), nullable=False)
    category = Column(Integer, ForeignKey("categories.id"), nullable=False)

    steps = relationship("Step", backref="recipe", cascade="all, delete-orphan")

