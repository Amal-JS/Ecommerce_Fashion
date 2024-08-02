from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
# Create your views here.
from . models import Product
from .serializers import ProductSerializer

class AllProducts(APIView):
    def get(self,request):
        all_products  = Product.objects.all()
        serialized_data = ProductSerializer(all_products,many=True)
        return JsonResponse({'products':serialized_data.data},status=200)