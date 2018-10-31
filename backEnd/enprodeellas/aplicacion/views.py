from django.shortcuts import render, render_to_response
from aplicacion.models import *

from rest_framework import generics
from aplicacion.serializers import *


# USUARIO
class UsuarioList(generics.ListCreateAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class UsuarioDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

# CONTACTO_EMERGENCIA
class ContactoEmergenciaList(generics.ListCreateAPIView):
    serializer_class = ContactoEmergenciaSerializer
    queryset = ContactoEmergencia.objects.all()

class ContactoEmergenciaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ContactoEmergenciaSerializer
    queryset = ContactoEmergencia.objects.all()

# TIPO_VIOLENCIA
class TipoViolenciaList(generics.ListCreateAPIView):
    serializer_class = TipoViolenciaSerializer
    queryset = TipoViolencia.objects.all()

class TipoViolenciaDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TipoViolenciaSerializer
    queryset = TipoViolencia.objects.all()

# PUNTO ATENCION
class PuntoAtencionList(generics.ListCreateAPIView):
    serializer_class = PuntoAtencionSerializer
    queryset = PuntoAtencion.objects.all()

class PuntoAtencionDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PuntoAtencionSerializer
    queryset = PuntoAtencion.objects.all()

