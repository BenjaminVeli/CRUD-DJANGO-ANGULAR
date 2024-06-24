from django.http import HttpRequest
from django.shortcuts import render
from rest_framework import generics
from .models import User , Seguro
from .serializer import UserSerializer , SeguroSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SeguroList(generics.ListCreateAPIView):
    queryset = Seguro.objects.all()
    serializer_class = SeguroSerializer

class SeguroDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Seguro.objects.all()
    serializer_class = SeguroSerializer


