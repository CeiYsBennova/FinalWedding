from .models import Max3d
from rest_framework.viewsets import ModelViewSet
from .serializers import Max3dSerializer

class Max3dViewSet(ModelViewSet):
    queryset = Max3d.objects.all()
    serializer_class = Max3dSerializer

