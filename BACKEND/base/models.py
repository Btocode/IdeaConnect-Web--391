from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserInfo(models.Model):
  user = models.OneToOneField(User,on_delete=models.CASCADE)
  GENDER = (
    ('Male','Male'),
    ('Female','Female'),
    ('Others','Others'),
  )
  profile_picture = models.ImageField(upload_to = 'uploads/profile_pictures',default = 'uploads/profile_pictures/default.png',blank = True,)
  gender = models.CharField(max_length = 10, null=True,choices=GENDER)
  age = models.IntegerField(null=True)
  jobTitle = models.CharField(max_length = 50, null=True)
  programming = models.CharField(max_length = 200, null=True)
  languageKnown = models.CharField(max_length = 200, null=True)
  linkedIn = models.CharField(max_length = 200, null=True)
  resume = models.CharField(max_length = 200, null=True)
  github = models.CharField(max_length = 200, null=True)

  def __str__(self):
    return self.user.first_name

class Idea(models.Model):
  ideaId = models.AutoField(primary_key=True)
  ideaDesc = models.CharField(max_length=2000,null=True)
  ideaTitle = models.CharField(max_length=200,default='Provide a title here')
  ideaTags = models.CharField(max_length=200,default='#tags')
  # upVotes = models.IntegerField(null=True)
  # downVotes = models.IntegerField(null=True)
  collaborators = models.IntegerField(null=True,blank = True)
  postingTime = models.DateTimeField(auto_now_add=True, null=True)
  upvotes = models.ManyToManyField(User, related_name='tempUser1', blank = True, )
  downvotes = models.ManyToManyField(User, related_name='tempUser2', blank = True, )

  author = models.ForeignKey(User, on_delete=models.CASCADE)
  # comment = models.ForeignKey(Suggestion,on_delete=models.CASCADE)
  def __str__(self):
    return self.ideaTitle
  
  class Meta:
        ordering = ['ideaTags']
