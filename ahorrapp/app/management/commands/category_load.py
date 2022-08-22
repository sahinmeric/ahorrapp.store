from csv import DictReader

from django.core.management import BaseCommand
from app.models import category


class Command(BaseCommand):

    def handle(self, *args, **options):
        print("Loading category data from csv into category table")
        for row in DictReader(open('./app/management/csv_files/category.csv')):
            cat = category()

            name = row['name']
            if category.objects.filter(name=row['name']):
                print(f" {name} ---> category exists")
                continue
            else:
                cat.name = name
                print(f"{name} ---> Added")
                cat.save()
