from django.contrib import admin

from Cursos_DVG.models import Curso, Estudiante, Matricula, Venta,Docente

# Register your models here.

admin.site.register(Curso)
admin.site.register(Estudiante)
admin.site.register(Matricula)
admin.site.register(Venta)
admin.site.register(Docente)

