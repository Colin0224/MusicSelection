from django.urls import path
from .views import hello_world
from .views import turtles_view
from api.views import sample_data

urlpatterns = [
    path('hello/', hello_world),
    path('turtles/', turtles_view),
    path('api/sample/', sample_data),
]