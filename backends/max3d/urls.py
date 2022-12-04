from django.urls import path
from .views import Max3dViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('max3d', Max3dViewSet)

urlpatterns = router.urls