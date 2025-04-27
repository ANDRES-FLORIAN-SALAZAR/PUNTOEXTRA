from django.contrib import admin
from .models import Automovil

@admin.register(Automovil)
class AutomovilAdmin(admin.ModelAdmin):
    list_display = ('nombre', 'marca', 'modelo', 'diseno', 'cilindraje')
    search_fields = ('nombre', 'marca')
    list_filter = ('marca', 'modelo')