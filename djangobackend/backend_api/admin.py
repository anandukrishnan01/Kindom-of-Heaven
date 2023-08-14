from django.contrib import admin

# Register your models here.
from.models import Contact,Review,Bookingform

class ContactAdmin(admin.ModelAdmin):
    list = ('name','email', 'phno', 'message')
    admin.site.register(Contact)

class ReviewAdmin(admin.ModelAdmin):
    list = ('name','email', 'rating', 'desc')
    admin.site.register(Review)

class BookingAdmin(admin.ModelAdmin):
    list = ('name','email', 'phno','persons','days','date','startpoint','destination', 'destination')
    admin.site.register(Bookingform)