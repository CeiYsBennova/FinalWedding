from rest_framework.serializers import ModelSerializer
from .models import Max3DPro

class Max3DProSerializer(ModelSerializer):
    class Meta:
        model = Max3DPro
        fields = '__all__'

