# Generated by Django 4.0 on 2022-01-03 17:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0015_rename_idea_suggestionclass_ideaid_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='suggestionclass',
            name='id',
        ),
        migrations.AlterField(
            model_name='suggestionclass',
            name='ideaId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='base.idea'),
        ),
    ]