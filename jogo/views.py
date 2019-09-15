from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def pagina_jogo_velha(request):
    return render(request, 'jogoVelha.html')

def pagina_jogo_forca(request):
    return render(request, 'jogoForca.html')

def pagina_jogo_snake(request):
    return render(request, 'jogoSnake.html')

def pagina_jogo_genius(request):
    return render(request, 'jogoGenius.html')