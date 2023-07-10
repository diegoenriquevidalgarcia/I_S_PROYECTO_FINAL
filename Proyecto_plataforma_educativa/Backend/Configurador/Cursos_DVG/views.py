from django.shortcuts import render

from rest_framework import viewsets
from Cursos_DVG.models import Curso, Estudiante, Matricula, Venta, Docente
from Cursos_DVG.serializers import CursoSerializer,  EstudianteSerializer, MatriculaSerializer, VentaSerializer, DocenteSerializer

# Create your views here.

class cursos(viewsets.ModelViewSet):
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

class estudiantes(viewsets.ModelViewSet):
    queryset = Estudiante.objects.all()
    serializer_class = EstudianteSerializer

class matriculas(viewsets.ModelViewSet):
    queryset = Matricula.objects.all()
    serializer_class = MatriculaSerializer

class ventas(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

class docentes(viewsets.ModelViewSet):
    queryset = Docente.objects.all()
    serializer_class = DocenteSerializer


