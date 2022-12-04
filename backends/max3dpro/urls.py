from django.urls import path
from .views import Max3DProViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('max3dpro', Max3DProViewSet)

urlpatterns = router.urls