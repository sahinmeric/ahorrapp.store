from csv import DictReader

from django.core.management import BaseCommand
from app.models import product_list, brand, category, sub_category


class Command(BaseCommand):

    def handle(self, *args, **options):
        print("Loading product_list data from csv into product_list table")
        for row in DictReader(open('./app/management/csv_files/product_list.csv')):
            prod = product_list()

            name = row['name']
            img_url = row['img_url']
            brand_id = row['brand_id']
            cat_id = row['cat_id']
            sub_id = row['sub_id']
            if product_list.objects.filter(name=row['name']):
                print(f" {name} ---> Product exists")
                continue
            else:
                prod.name = name
                prod.img_url = img_url
                prod.brand_id, _ = brand.objects.get_or_create(id=brand_id)
                prod.cat_id, _ = category.objects.get_or_create(id=cat_id)
                prod.sub_id, _ = sub_category.objects.get_or_create(id=sub_id)

                print(f"{name} ---> Added")
                prod.save()
