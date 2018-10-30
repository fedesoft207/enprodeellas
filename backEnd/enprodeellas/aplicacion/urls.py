from django.conf.urls import url
from aplicacion import views

urlpatterns = [
 url(r'^usuarios/$', views.UsuarioList.as_view()),
 url(r'^usuarios/(?P<pk>[0-9]+)/$', views.UsuarioDetail.as_view()),

 url(r'^contactoEmergencias/$', views.ContactoEmergenciaList.as_view()),
 url(r'^contactoEmergencias/(?P<pk>[0-9]+)/$', views.ContactoEmergenciaDetail.as_view()),

 url(r'^tipoViolencias/$', views.TipoViolenciaList.as_view()),
 url(r'^tipoViolencias/(?P<pk>[0-9]+)/$', views.TipoViolenciaDetail.as_view()),

 url(r'^puntosAtencion/$', views.PuntoAtencionList.as_view()),
 url(r'^puntosAtencion/(?P<pk>[0-9]+)/$', views.PuntoAtencionDetail.as_view()),
]