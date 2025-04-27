from django.shortcuts import render, redirect, get_object_or_404
from django.contrib import messages
from .models import Automovil

def index(request):
    return render(request, 'FlorianApp/index.html')

def save_auto(request):
    if request.method == 'POST':
        try:
            auto_id = request.POST.get('autoId')
            nombre = request.POST.get('nombre')
            marca = request.POST.get('marca')
            modelo = request.POST.get('modelo')
            diseno = request.POST.get('diseno')
            cilindraje = request.POST.get('cilindraje')
            
            # Validación básica
            if not all([nombre, marca, modelo, diseno, cilindraje]):
                messages.error(request, 'Todos los campos son obligatorios')
                return redirect('index')
            
            if auto_id:  # Edición
                auto = get_object_or_404(Automovil, id=auto_id)
                auto.nombre = nombre
                auto.marca = marca
                auto.modelo = modelo
                auto.diseno = diseno
                auto.cilindraje = cilindraje
            else:  # Creación
                auto = Automovil(
                    nombre=nombre,
                    marca=marca,
                    modelo=modelo,
                    diseno=diseno,
                    cilindraje=cilindraje
                )
            
            auto.save()
            messages.success(request, 'Automóvil guardado correctamente')
        except Exception as e:
            messages.error(request, f'Error al guardar: {str(e)}')
        
        return redirect('index')
    
    return redirect('index')

from django.http import JsonResponse
from .models import Automovil

def search_autos(request):
    search_term = request.GET.get('q', '')
    autos = Automovil.objects.filter(
        nombre__icontains=search_term
    ) | Automovil.objects.filter(
        marca__icontains=search_term
    )  # Añade más campos según necesites
    
    results = []
    for auto in autos:
        results.append({
            'nombre': auto.nombre,
            'marca': auto.marca,
            'modelo': auto.modelo,
            'diseno': auto.diseno,
            'cilindraje': auto.cilindraje
        })
    
    return JsonResponse({'autos': results})