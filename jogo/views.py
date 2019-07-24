from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html')

def pagina_jogo_velha(request):
    return render(request, 'jogoVelha.html')