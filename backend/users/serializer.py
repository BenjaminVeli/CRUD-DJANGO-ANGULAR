from rest_framework import serializers
from .models import User, Seguro

class SeguroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seguro
        fields = ('id', 'name' ,'cost')
        
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'name', 'lastname', 'email', 'seguro']
    




        
