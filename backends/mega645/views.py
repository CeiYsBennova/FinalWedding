from .models import Mega645
from rest_framework.viewsets import ModelViewSet
from .serializers import Mega645Serializer

class Mega645ViewSet(ModelViewSet):
    queryset = Mega645.objects.all()
    serializer_class = Mega645Serializer
