from .models import Max3DPro
from rest_framework.viewsets import ModelViewSet
from .serializers import Max3DProSerializer

class Max3DProViewSet(ModelViewSet):
    queryset = Max3DPro.objects.all()
    serializer_class = Max3DProSerializer
