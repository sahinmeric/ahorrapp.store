from django.contrib import admin
from django.urls import path, include

from app import views


urlpatterns = [
    path('', views.home),
    path('list', views.list),
    path('api/', include('app.urls')),
    path('admin/', admin.site.urls)
    ]