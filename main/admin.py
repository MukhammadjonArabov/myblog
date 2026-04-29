from django.contrib import admin

from .models import Experience, Post, Project, Skill, Testimonial


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ("name", "level", "icon")
    search_fields = ("name",)
    list_filter = ("level",)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "project_link", "created_at")
    search_fields = ("title", "description")
    list_filter = ("created_at",)


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ("title", "organization", "start_date", "end_date")
    search_fields = ("title", "organization", "description")
    list_filter = ("start_date", "end_date")


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ("title", "created_at")
    search_fields = ("title", "content")
    list_filter = ("created_at",)


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ("name", "language", "created_at")
    search_fields = ("name", "text")
    list_filter = ("language", "created_at")
