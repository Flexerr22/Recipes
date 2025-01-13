from app.database import Base
from sqlalchemy import Integer, String, Column


class Ingredients(Base):
    __tablename__ = "ingredients"
    id = Column(Integer, primary_key=True, nullable=False)
    ingredient_name = Column(String, nullable=False, unique=True)