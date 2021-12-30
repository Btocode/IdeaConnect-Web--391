from rest_framework import serializers
from django.contrib.auth import get_user_model # If used custom user model
from django.contrib.auth.models import User # If used custom user model
from base.models import UserInfo,Idea,SuggestionClass
UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = UserModel.objects.create_user(
            first_name = validated_data['first_name'],
            last_name = validated_data['last_name'],
            username=validated_data['username'],
            email = validated_data['email'],
            password=validated_data['password'],
        )
        return user

    class Meta:
        model = UserModel
        # Tuple of serialized model fields (see link [2])
        fields = ( "id", 'first_name','last_name',"username",'email', "password", )

# class UserInfoSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = UserInfo
#     fields = '__all__'
class IdeaSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Idea
        fields = ('ideaId','ideaTitle','ideaDesc','ideaTags','author','upvotes','downvotes','suggestions','postingTime')
    
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['voteCounter'] = instance.upvotes.count() - instance.downvotes.count()
        representation['first_name'] = instance.author.first_name
        representation['last_name'] = instance.author.last_name
        # representation['picture'] = instance.author.profile_picture
        return representation


class UpvoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Idea
        fields = ['upvotes','downvotes','pk']

class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ('user','profile_picture', 'gender', 'age','jobTitle', 'programming', 'languageKnown','linkedIn','resume','github','bio')

    def to_representation(self, instance):
            representation = super().to_representation(instance)
            representation['first_name'] = instance.user.first_name
            representation['last_name'] = instance.user.last_name
            representation['email'] = instance.user.email
            representation['username'] = instance.user.username
            return representation

