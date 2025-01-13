from app.database import async_session_maker


from sqlalchemy import select, insert


class BaseServices:

    model = None

    @classmethod
    async def find_by_id(cls, model_id: int):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(id=model_id)
            result = await session.execute(query)
            return result.scalar_one_or_none()
        
    @classmethod
    async def get_all(cls, **filters_by):
        async with async_session_maker() as session:
            query = select(cls.model).filter_by(**filters_by)
            result = await session.execute(query)
            return result.scalars.all()
