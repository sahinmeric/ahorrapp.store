# Generated by Django 4.1 on 2022-08-22 00:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product_list',
            name='img_url',
            field=models.CharField(max_length=200),
        ),
    ]
