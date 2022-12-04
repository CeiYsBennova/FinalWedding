from rest_framework.serializers import ModelSerializer
from .models import Mega645

class Mega645Serializer(ModelSerializer):
    class Meta:
        model = Mega645
        fields = '__all__'