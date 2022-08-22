from csv import DictReader

from django.core.management import BaseCommand
from app.models import sub_category, category


class Command(BaseCommand):

    def handle(self, *args, **options):
        print("Loading sub category data from csv into sub category table")
        for row in DictReader(open('./app/management/csv_files/sub_category.csv')):
            sub_cat = sub_category()

            name = row['name']
            cat_id = row['cat_id']
            if sub_category.objects.filter(name=row['name']):
                print(f" {name} ---> sub category exists")
                continue
            else:
                sub_cat.name = name
                sub_cat.cat_id, _ = category.objects.get_or_create(id=cat_id)
                print(f"{name} ---> Added")
                sub_cat.save()
