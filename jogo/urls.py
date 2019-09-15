from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('jogoVelha/', views.pagina_jogo_velha),
    path('jogoForca/', views.pagina_jogo_forca),
    path('jogoSnake/', views.pagina_jogo_snake),
]