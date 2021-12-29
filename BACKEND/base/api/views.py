from django.http import JsonResponse 
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.views import View
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import (CreateModelMixin, DestroyModelMixin,
                                   ListModelMixin, RetrieveModelMixin,
                                   UpdateModelMixin)


from rest_framework import permissions,generics
from rest_framework.generics import CreateAPIView
from django.contrib.auth import get_user_model # If used custom user model
from base.models import Idea,UserInfo
from django.contrib.auth.models import User

from .serializers import UserSerializer,IdeaSerializer,ProfileSerializer,UpvoteSerializer



from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
  routes = [
    '/api/token',
    '/api/token/refresh'

  ]
  return Response(routes)


class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer

class ManipulateUserView(GenericAPIView,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)


class IdeaView(GenericAPIView,ListModelMixin,CreateModelMixin):
    queryset = Idea.objects.all()
    serializer_class = IdeaSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class IdeaView2(GenericAPIView,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin):
    queryset = Idea.objects.all()
    serializer_class = IdeaSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)



# class UpvoteView(generics.CreateAPIView):
#     serializer_class = UpvoteSerializer
#     # permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         post = Idea.objects.get(pk = self.kwargs['pk'])
#         return Upvote.objects.filter(voter = user, post=post)
#     def perform_create(self, serializer):
#         serializer.save(voter = self.request.user,post = Idea.objects.get(pk = self.kwargs['pk']))

# class ProfileView(View):
#     def get(self, request, pk,*args,**kwargs):
#         profile = UserInfo.objects.get(pk = pk)
#         user = profile.user
#         ideas = Idea.objects.filter(author = user).order_by('-postingTime')

class UserProfileView(GenericAPIView,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin):
    queryset = UserInfo.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)

class ProfilesView(GenericAPIView,ListModelMixin,CreateModelMixin):
    queryset = UserInfo.objects.all()
    serializer_class = ProfileSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)
    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
    


# class UpvoteView1(GenericAPIView,ListModelMixin,CreateModelMixin):
#     queryset = Upvote.objects.all()
#     serializer_class = UpvoteSerializer

#     # def get(self, request, *args, **kwargs):
#     #     return self.list(request, *args, **kwargs)
#     def post(self, request, *args, **kwargs):
#         return self.create(request, *args, **kwargs)

class UpvoteView(GenericAPIView,RetrieveModelMixin,UpdateModelMixin,DestroyModelMixin):
    queryset = Idea.objects.all()
    serializer_class = UpvoteSerializer

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)
    def delete(self, request, *args, **kwargs):
        return self.destroy(request, *args, **kwargs)