
from django.urls import path,include
from .views import AllProducts
urlpatterns = [
    path('all_products/',AllProducts.as_view())
]
