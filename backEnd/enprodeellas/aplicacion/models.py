from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=True)
    #nickname = models.CharField(max_length=100)
    correo =  models.CharField(max_length=100)
    numero_celular =  models.CharField(max_length=10)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nickname

class ContactoEmergencia(models.Model):
    nombre = models.CharField(max_length=100)
    correo = models.CharField(max_length=100)
    numero_celular = models.CharField(max_length=10)
    usuario = models.ForeignKey(Usuario, on_delete = models.CASCADE)

    def __str__(self):
        return self.nombre

class TipoViolencia(models.Model):
    nombre = models.CharField(max_length=200)
    imagen = models.CharField(max_length=1000)
    descripcion = models.CharField(max_length=1000)

    def __str__(self):
        return self.nombre

class PuntoAtencion(models.Model): 
    nombre = models.CharField(max_length=200)
    coordenada = models.CharField(max_length=100)
    horario = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    direccion = models.CharField(max_length=100)


