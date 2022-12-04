from rest_framework.serializers import ModelSerializer
from .models import Power655

class Power655Serializer(ModelSerializer):
    class Meta:
        model = Power655
        fields = '__all__'