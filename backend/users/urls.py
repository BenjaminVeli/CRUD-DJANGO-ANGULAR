from django import urls
from django.urls import path
from .views import UserList, UserDetail, SeguroList, SeguroDetail

urlpatterns = [
    path('users/', UserList.as_view(), name="user-list"),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    
    path('seguros/', SeguroList.as_view(), name="seguro-list"),
    path('seguros/<int:pk>/', SeguroDetail.as_view(), name='seguro-detail'),
        
] 