from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponse

def hello_world(request):
    return JsonResponse({"message": "Hello, Django!"})

def sample_data(request):
    data = {
        "message": "Hello from Django!",
        "items": ["chicken", "turtle", "bobb", "moew"]
    }
    return JsonResponse(data)
def home(request):
    return HttpResponse("<h1>Welcome to the homepage!</h1>")

def turtles_view(request):
    """Returns a JSON response with a message."""
    return JsonResponse({"message": "I like turtles"})