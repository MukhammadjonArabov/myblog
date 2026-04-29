from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path

from main.views import blog_detail, blog_list, home

urlpatterns = [
    path("", home, name="home"),
    path("blog/", blog_list, name="blog_list"),
    path("blog/<int:pk>/", blog_detail, name="blog_detail"),
    path("admin/", admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
