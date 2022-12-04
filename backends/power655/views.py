from .models import Power655
from rest_framework.viewsets import ModelViewSet
from .serializers import Power655Serializer

class Power655ViewSet(ModelViewSet):
    queryset = Power655.objects.all()
    serializer_class = Power655Serializer
