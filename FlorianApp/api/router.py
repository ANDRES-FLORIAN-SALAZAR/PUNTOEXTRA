from rest_framework.routers import DefaultRouter
from .views import AutomovilViewSet

router = DefaultRouter()
router.register(r'automoviles', AutomovilViewSet, basename='automovil')