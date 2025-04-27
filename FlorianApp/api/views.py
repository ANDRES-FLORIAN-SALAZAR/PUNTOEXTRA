from rest_framework import viewsets
from FlorianApp.models import Automovil
from .serealizer import AutomovilSerializer

class AutomovilViewSet(viewsets.ModelViewSet):
    queryset = Automovil.objects.all()
    serializer_class = AutomovilSerializer