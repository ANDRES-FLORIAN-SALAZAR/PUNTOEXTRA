from django.db import models

class Automovil(models.Model):
    nombre = models.CharField(max_length=100)
    marca = models.CharField(max_length=100)
    modelo = models.IntegerField()
    diseno = models.CharField(max_length=50)
    cilindraje = models.IntegerField()
    
    def __str__(self):
        return f"{self.nombre} {self.marca} ({self.modelo})"