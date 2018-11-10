from rest_framework import serializers

from aplicacion.models import *
from django.contrib.auth.models import User

class UsuarioSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True, source="user.username")
    password = serializers.CharField(write_only=True, source="user.password")
    #nickname = serializers.CharField(required=False)
    correo = serializers.CharField(required=False)
    numero_celular = serializers.CharField(required=False)
    fecha_creacion = serializers.DateTimeField(required=False)

    class Meta:
        model = User
        fields = ('username','password','correo','numero_celular','fecha_creacion','id')

    def create(self, validated_data, instance=None):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        user.set_password(user_data['password'])
        user.save()
        Usuario.objects.update_or_create(user=user,**validated_data)
        usuario = Usuario.objects.get(user=user)
        return usuario


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
