from csv import DictReader

from django.core.management import BaseCommand
from app.models import market


class Command(BaseCommand):

    def handle(self, *args, **options):
        print("Loading market data from csv into market table")
        for row in DictReader(open('./app/management/csv_files/market.csv')):
            mark = market()

            name = row['name']
            url = row['url']
            if market.objects.filter(name=row['name']):
                print(f" {name} ---> market exists")
                continue
            else:
                mark.name = name
                mark.url = url
                print(f"{name} ---> Added")
                mark.save()
