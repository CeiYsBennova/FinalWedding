from rest_framework.serializers import ModelSerializer
from .models import Max3d

class Max3dSerializer(ModelSerializer):
    class Meta:
        model = Max3d
        fields = '__all__'