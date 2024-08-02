from rest_framework.serializers import ModelSerializer,CharField
from .models import Product,Color,DressType,Size






class ProductSerializer(ModelSerializer):
    dress_type = CharField(source = 'dress_type.type')
    size = CharField(source = 'size.dress_size')
    color = CharField(source = 'color.color_of_dress')
    hex_code = CharField(source = 'color.hex_code')
    class Meta:
        model = Product
        fields = '__all__'