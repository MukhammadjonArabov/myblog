from django.shortcuts import get_object_or_404, render

from .models import Experience, Post, Project, Skill, Testimonial


def home(request):
    skills = Skill.objects.all()
    projects = Project.objects.all()[:6]
    experiences = Experience.objects.all()[:6]
    latest_posts = Post.objects.all()[:3]
    testimonials = Testimonial.objects.all()
    return render(
        request,
        "index.html",
        {
            "skills": skills,
            "projects": projects,
            "experiences": experiences,
            "latest_posts": latest_posts,
            "testimonials": testimonials,
        },
    )


def blog_list(request):
    posts = Post.objects.all()
    return render(request, "blog_list.html", {"posts": posts})


def blog_detail(request, pk: int):
    post = get_object_or_404(Post, pk=pk)
    return render(request, "blog_detail.html", {"post": post})
