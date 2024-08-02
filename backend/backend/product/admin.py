from django.contrib import admin

# Register your models here.
from .models import Product,Color,DressType,Size


admin.site.register(Product)
admin.site.register(Color)
admin.site.register(DressType)
admin.site.register(Size)