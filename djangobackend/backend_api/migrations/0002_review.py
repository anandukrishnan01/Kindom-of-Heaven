# Generated by Django 4.1.5 on 2023-01-27 18:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=25)),
                ('email', models.EmailField(max_length=254)),
                ('rating', models.CharField(max_length=10)),
                ('desc', models.CharField(max_length=250)),
            ],
        ),
    ]
