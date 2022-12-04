from django.urls import path
from .views import ContactViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('contact', ContactViewSet)

urlpatterns = router.urls