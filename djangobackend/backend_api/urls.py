from backend_api.views import TravelViewSet,ContactViewSet,ReviewViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views


router = DefaultRouter()
router.register('contact', views.ContactViewSet, basename='contact')
router.register('travel', views.TravelViewSet, basename='travel')
router.register('review', views.ReviewViewSet, basename='review')


urlpatterns = router.urls