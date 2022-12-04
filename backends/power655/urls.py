from django.urls import path
from .views import Power655ViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('power655', Power655ViewSet)

urlpatterns = router.urls