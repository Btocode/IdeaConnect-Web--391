# Generated by Django 4.0 on 2022-01-03 15:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0013_alter_idea_options'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='idea',
            options={'ordering': ['-postingTime']},
        ),
    ]