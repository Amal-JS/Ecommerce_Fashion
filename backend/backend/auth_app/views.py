from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.views import APIView
from . models import User

class UserView(APIView):
    def post(self,request):
        username  = request.data.get('username',None)
        password  = request.data.get('password',None)
        if username and password :
            
            if username  == 'user' and password == 'user':
                print(username,password)
                user = User.objects.get(username=username)
                return JsonResponse({'userExists':True,'userId':user.id})
            else:
                return JsonResponse({'userExists':False})