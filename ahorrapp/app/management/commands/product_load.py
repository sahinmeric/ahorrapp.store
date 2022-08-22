from csv import DictReader

from django.core.management import BaseCommand
from django.utils import timezone
from app.models import market, product, product_list


DATETIME_FORMAT = '%m/%d/%Y %H:%M'


class Command(BaseCommand):
    def handle(self, *args, **options):
        print("Loading product data from csv into product table")
        for row in DictReader(open('./app/management/csv_files/product.csv')):
            prod = product()

            product_id = row['product_id']
            product_url = row['product_url']
            market_id = row['market_id']
            price = row['price']
            update_date = timezone.now()

            if product.objects.filter(product_url=row['product_url']):
                print(f" {product_id} ---> Product exists")
                continue
            else:
                prod.product_url = product_url
                prod.price = price
                prod.update_date = update_date
                prod.product_id, _ = product_list.objects.get_or_create(id=product_id)
                prod.market_id, _ = market.objects.get_or_create(id=market_id)
                print(f"{product_id} ---> Added")
                prod.save()
