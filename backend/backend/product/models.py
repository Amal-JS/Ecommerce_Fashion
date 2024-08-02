from django.db import models


class DressType(models.Model):
    type = models.CharField(max_length=30)
    def __str__(self):
        return self.type


class Size(models.Model):
    dress_size = models.CharField(max_length=20)
    def __str__(self):
        return self.dress_size
class Color(models.Model):
    color_of_dress = models.CharField(max_length=20)
    hex_code = models.CharField(max_length=15)
    def __str__(self):
        return self.color_of_dress

class Product(models.Model):
    name = models.CharField(max_length=200,unique=True)
    mrp_price = models.PositiveIntegerField()
    selling_price = models.IntegerField()
    image = models.ImageField(upload_to='media/products/')
    quantity = models.PositiveIntegerField(default=0)
    description = models.TextField()
    dress_type  = models.ForeignKey(DressType,on_delete=models.CASCADE)
    size  = models.ForeignKey(Size,on_delete=models.CASCADE)
    color  = models.ForeignKey(Color,on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.name} {self.dress_type.type}  {self.size.dress_size} {self.color.color_of_dress}"