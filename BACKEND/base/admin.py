from django.contrib import admin
from .models import UserInfo,Idea,SuggestionClass
# Register your models here.

@admin.register(Idea)
class UserInfoAdmin(admin.ModelAdmin):
    list_display = ('author',"ideaTitle", "ideaTags", "postingTime")

admin.site.register(UserInfo)
admin.site.register(SuggestionClass)