from rest_framework import serializers

from aplicacion.models import *

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ('nickname','correo','numero_celular','fecha_creacion','id')

class ContactoEmergenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactoEmergencia
        fields = ('nombre','correo','numero_celular','usuario','id')

class TipoViolenciaSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoViolencia
        fields = ('nombre','imagen','descripcion','id')

class PuntoAtencionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PuntoAtencion
        fields = ('nombre','coordenada','horario','telefono','direccion','id')
