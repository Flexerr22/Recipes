from app.database import Base
from sqlalchemy import Column, String, Integer

class Categories(Base):
    __tablename__ = "categories"
    id = Column(Integer, primary_key=True, nullable=False)
    category_name = Column(String, nullable=False, unique=True)
    