from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def productDetail(request):
    return HttpResponse('You found the site!..')