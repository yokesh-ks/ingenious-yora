from django.urls import path
from django.http import JsonResponse


def health(request):
    return JsonResponse({'status': 'ok', 'service': 'ingenious-yora-api'})


urlpatterns = [
    path('health/', health),
]
