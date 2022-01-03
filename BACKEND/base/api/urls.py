from django.urls import path 
from . import views
from .views import MyTokenObtainPairView,CreateUserView,IdeaView,IdeaView2,ManipulateUserView,UserProfileView,ProfilesView,UpvoteView,SuggestionsGroup1,SuggestionsGroup2

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
  path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/create/', CreateUserView.as_view()),
    path('token/manipulate/<int:pk>/', ManipulateUserView.as_view()),
    path('token/ideas/',IdeaView.as_view()),
    path('token/idea/<int:pk>/',IdeaView2.as_view()),
    path('token/profile/<int:pk>/',UserProfileView.as_view()),
    path('token/profiles/',ProfilesView.as_view()),
    path('token/idea/upvote/<int:pk>/',UpvoteView.as_view()),
    path('token/idea/suggestions/', views.SuggestionsGroup1.as_view(), name="api-overview"),
    path('token/idea/suggestion/<int:pk>', views.SuggestionsGroup2.as_view(), name="api-overview"),

    
]