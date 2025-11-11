from fastapi import APIRouter

router = APIRouter(prefix="/tasks", tags=["Tarefas"])

@router.get("/")
def listar_tarefas():
    return [{"id": 1, "titulo": "Study FastAPI", "complete": False}]