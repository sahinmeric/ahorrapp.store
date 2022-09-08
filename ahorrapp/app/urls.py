from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter, SimpleRouter
from .views import productViewSet, product_listViewSet, marketViewSet
from .views import disco_productsViewSet, geant_productsViewSet
from .views import tata_productsViewSet, tiendainglesa_productsViewSet
""" defines URLs """

router = SimpleRouter()
router.register(r'products', productViewSet)
router.register(r'markets', marketViewSet)
router.register(r'product_list', product_listViewSet)
router.register(r'disco-products', disco_productsViewSet)
router.register(r'geant-products', geant_productsViewSet)
router.register(r'tata-products', tata_productsViewSet)
router.register(r'tienda-inglesa-products', tiendainglesa_productsViewSet)

urlpatterns = router.urls