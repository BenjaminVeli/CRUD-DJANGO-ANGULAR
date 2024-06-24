from django.db import models

class Seguro(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    cost = models.IntegerField(default=0)
    
    def __str__(self):
        return self.name

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    seguro = models.ForeignKey(Seguro, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return self.name
