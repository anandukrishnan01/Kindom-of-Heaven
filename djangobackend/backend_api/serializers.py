from rest_framework import serializers
from backend_api.models import Contact,Review,Bookingform

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields ="__all__"

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields ="__all__"

class TravelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookingform
        fields ="__all__"