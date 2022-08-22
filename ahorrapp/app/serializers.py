from rest_framework import serializers
from .models import product_list, product, market
from .models import category, sub_category, brand
""" serializers """


class marketSerializer(serializers.ModelSerializer):
    """class market serializer"""
    class Meta:
        """class Meta"""
        model = market
        fields = '__all__'


class product_listSerializer(serializers.ModelSerializer):
    """class product_list Serializer"""
    class Meta:
        """class Meta"""
        model = product_list
        fields = '__all__'


class productSerializer(serializers.ModelSerializer):
    """class product serializer"""
    class Meta:
        """class Meta"""
        model = product
        fields = '__all__'


class categorySerializer(serializers.ModelSerializer):
    """class category serializer"""
    class Meta:
        model = category
        fields = '__all__'


class sub_categorySerializer(serializers.ModelSerializer):
    """ class sub-category serializer """
    class Meta:
        model = sub_category
        fields = '__all__'


class brandSerializer(serializers.ModelSerializer):
    """ class brand serializer """
    class Meta:
        model = brand
        fields = '__all__'


class market_productsSerializer(serializers.ModelSerializer):
    """class market products serializer"""
    class Meta:
        """class Meta"""
        model = product
        fields = '__all__'