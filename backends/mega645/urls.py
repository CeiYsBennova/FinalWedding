from django.urls import path
from .views import Mega645ViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('mega645',Mega645ViewSet)

urlpatterns = router.urls