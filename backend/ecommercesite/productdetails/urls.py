from django.urls import path
from . import views

urlpatterns = [
    path('productdetail', views.productDetail)
]