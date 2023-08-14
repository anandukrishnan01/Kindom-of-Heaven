from django.db import models

# Create your models here.

class Contact(models.Model):
    name = models.CharField(max_length=25)
    email = models.EmailField()
    phno = models.CharField(max_length=10)
    message = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Review(models.Model):
    name = models.CharField(max_length=25)
    email = models.EmailField()
    rating = models.CharField(max_length=10)
    desc = models.CharField(max_length=250)

    def __str__(self):
        return self.name


class Bookingform(models.Model):
    name = models.CharField(max_length=25)
    email = models.EmailField(max_length=100)
    phno = models.CharField(max_length=10)
    persons = models.CharField(max_length=20)
    days = models.CharField(max_length=20)
    date = models.DateField()
    startpoint = models.CharField(max_length=250)
    destination = models.CharField(max_length=250)

    def __str__(self):
        return self.name