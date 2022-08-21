from csv import DictReader

from django.core.management import BaseCommand
from app.models import brand


class Command(BaseCommand):
    """This script loads brand names from csv to brand table"""
    def handle(self, *args, **options):
        print("Loading brand data from csv into brand table")
        for row in DictReader(open('./app/management/csv_files/brand.csv')):
            _brand = brand()
            name = row['name']
            print(name)
            if brand.objects.filter(name=row['name']):
                continue
            else:
                _brand.name = row['name']
                _brand.save()