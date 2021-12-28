from django.urls import path 
from . import views
from .views import MyTokenObtainPairView,CreateUserView,IdeaView,IdeaView2,ManipulateUserView

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
  path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/create/', CreateUserView.as_view()),
    path('token/<int:pk>/manipulate/', ManipulateUserView.as_view()),
    path('token/idea/',IdeaView.as_view()),
    path('token/idea/<int:pk>/',IdeaView2.as_view()),

]