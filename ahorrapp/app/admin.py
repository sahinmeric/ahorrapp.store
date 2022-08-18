from django.contrib import admin

from .models import brand, product, market
from .models import product_list, sub_category, category


@admin.register(product)
class products_Admin(admin.ModelAdmin):
    list_display = ['product_id', 'product_url', 'price',
                    'market_id', 'update_date']


@admin.register(market)
class market_Admin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(product_list)
class product_list_Admin(admin.ModelAdmin):
    list_display = ['id', 'name', 'img_url', 'brand_id', 'cat_id', 'sub_id']


@admin.register(category)
class category_Admin(admin.ModelAdmin):
    list_display = ['id', 'name']


@admin.register(sub_category)
class sub_category_Admin(admin.ModelAdmin):
    list_display = ['id', 'cat_id', 'name']


@admin.register(brand)
class brand_Admin(admin.ModelAdmin):
    list_display = ['id', 'name']
