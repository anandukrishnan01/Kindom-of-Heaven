from django.shortcuts import render
from .models import Contact,Review,Bookingform
from .serializers import ContactSerializer,ReviewSerializer,TravelSerializer
from rest_framework import viewsets
# Create your views here.


class ContactViewSet(viewsets.ModelViewSet):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()

class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    queryset = Review.objects.all()

class TravelViewSet(viewsets.ModelViewSet):
    serializer_class = TravelSerializer
    queryset = Bookingform.objects.all()