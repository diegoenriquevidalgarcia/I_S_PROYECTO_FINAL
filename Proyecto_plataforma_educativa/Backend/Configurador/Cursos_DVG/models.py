from django.db import models

# Create your models here.

class Curso(models.Model):
    codigo = models.CharField(max_length=6, primary_key=True)
    nombre = models.CharField(max_length=50)
    duracion = models.PositiveSmallIntegerField(default=5)
    precio = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        txt = "{0}({1})/ Precio: {2}/ (Duración: {3} día(s))"
        return txt.format(self.nombre, self.codigo, self.precio, self.duracion)

class Estudiante(models.Model):
    dni = models.CharField(max_length=8, primary_key=True)
    apellidoPaterno = models.CharField(max_length=50)
    apellidoMaterno = models.CharField(max_length=50)
    nombres = models.CharField(max_length=50)
    fechaNacimiento = models.DateField()
    sexos = [
        ('F', 'Femenino'),
        ('M', 'Masculino')
        ]
    sexo = models.CharField(max_length=1, choices=sexos, default='F')
    vigencia = models.BooleanField(default=True)
    curso = models.ForeignKey(Curso, null=False, blank=False, on_delete=models.CASCADE)
    
    def nombreCompleto(self):
        txt = "{0} {1}, {2}"
        return txt.format(self.apellidoPaterno, self.apellidoMaterno, self.nombres)
    
    def __str__(self):
        txt = "{0} / Curso: {1} / {2}"
        if self.vigencia:
            estadoEstudiante = "VIGENTE"
        else:
            estadoEstudiante = "DE BAJA"
        return txt.format(self.nombreCompleto(), self.curso, estadoEstudiante)

class Matricula(models.Model):
    id = models.AutoField(max_length=8, primary_key=True)
    fecha = models.DateTimeField(auto_now_add=True)
    estudiante = models.ForeignKey(Estudiante, null=False, blank=False, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self):
        txt = "{0} está matriculad{1} en el curso {2} / Fecha: {3}"
        if self.estudiante.sexo == "F":
            letraSexo = "a"
        else:
            letraSexo = "o"
            fecMat = self.fecha.strftime("%A %d/%m/%Y %H:%M:%S")
            return txt.format(self.estudiante.nombreCompleto(), letraSexo, self.curso, fecMat)

class Venta(models.Model):
    codigo = models.CharField(max_length=8, primary_key=True)
    numeroOperacion = models.CharField(max_length=8)
    fecha = models.DateTimeField(auto_now_add=True)
    matricula = models.ForeignKey(Matricula, null=False, blank=False, on_delete=models.CASCADE)
    estudiante = models.ForeignKey(Estudiante, null=False, blank=False, on_delete=models.CASCADE)
    curso = models.ForeignKey(Curso, null=False, blank=False, on_delete=models.CASCADE)

    def __str__(self):
        txt = "{0} ha realizado su pago/ Curso: {1} / Fecha: {2}"
        fecMat = self.fecha.strftime("%A %d/%m/%Y %H:%M:%S")
        return txt.format(self.estudiante.nombreCompleto(),self.curso.nombre, fecMat)


class Docente(models.Model):
    dni = models.CharField(max_length=8, primary_key=True)
    apellidoPaterno = models.CharField(max_length=50)
    apellidoMaterno = models.CharField(max_length=50)
    nombres = models.CharField(max_length=50)
    fechaNacimiento = models.DateField()
    sexos = [
        ('F', 'Femenino'),
        ('M', 'Masculino')
        ]
    sexo = models.CharField(max_length=1, choices=sexos, default='F')
    vigencia = models.BooleanField(default=True)
    curso = models.ForeignKey(Curso, null=False, blank=False, on_delete=models.CASCADE)
    
    def nombreCompleto(self):
        txt = "{0} {1}, {2}"
        return txt.format(self.apellidoPaterno, self.apellidoMaterno, self.nombres)
    
    def __str__(self):
        txt = "{0} / Curso: {1} / {2}"
        if self.vigencia:
            estadoDocente = "VIGENTE"
        else:
            estadoDocente = "DE BAJA"
        return txt.format(self.nombreCompleto(), self.curso, estadoDocente)



