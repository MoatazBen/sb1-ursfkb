from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DHT11ViewSet, register_user

router = DefaultRouter()
router.register(r'readings', DHT11ViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('auth/register/', register_user, name='register'),
]