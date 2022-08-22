from django.db import models

class brand(models.Model):
    """class brand model"""
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class market(models.Model):
    """class market model"""
    name = models.CharField(max_length=50)
    url = models.URLField()
    img_url = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class category(models.Model):
    """class category model"""
    class Meta:
        verbose_name = "category"
        verbose_name_plural = "categories"

    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class sub_category(models.Model):
    """class sub_category model"""
    class Meta:
        verbose_name = "sub category"
        verbose_name_plural = "sub categories"

    name = models.CharField(max_length=50)
    cat_id = models.ForeignKey(category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class product_list(models.Model):
    """class product_list model"""
    class Meta:
        verbose_name = "product list"
        verbose_name_plural = "product list"

    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=120)
    img_url = models.CharField(max_length=200)
    brand_id = models.ForeignKey(brand, on_delete=models.CASCADE)
    cat_id = models.ForeignKey(category, on_delete=models.CASCADE)
    sub_id = models.ForeignKey(sub_category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class product(models.Model):
    """class product model"""
    class Meta:
        verbose_name = "product"
        verbose_name_plural = "products"

    product_id = models.ForeignKey(product_list, on_delete=models.CASCADE)
    price = models.SmallIntegerField(default=None, blank=True, null=True)
    product_url = models.URLField()
    market_id = models.ForeignKey(market, on_delete=models.CASCADE)
    update_date = models.DateField(auto_now=True)
