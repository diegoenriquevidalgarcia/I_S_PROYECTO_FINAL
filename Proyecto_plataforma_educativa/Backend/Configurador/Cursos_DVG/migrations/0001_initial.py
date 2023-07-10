# Generated by Django 4.1.2 on 2022-10-08 10:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Curso',
            fields=[
                ('codigo', models.CharField(max_length=6, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('duracion', models.PositiveSmallIntegerField(default=5)),
                ('precio', models.DecimalField(decimal_places=2, max_digits=8)),
            ],
        ),
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('dni', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('apellidoPaterno', models.CharField(max_length=50)),
                ('apellidoMaterno', models.CharField(max_length=50)),
                ('nombres', models.CharField(max_length=50)),
                ('fechaNacimiento', models.DateField()),
                ('sexo', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino')], default='F', max_length=1)),
                ('vigencia', models.BooleanField(default=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.curso')),
            ],
        ),
        migrations.CreateModel(
            name='Matricula',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.curso')),
                ('estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.estudiante')),
            ],
        ),
        migrations.CreateModel(
            name='Venta',
            fields=[
                ('codigo', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('numeroOperacion', models.CharField(max_length=8)),
                ('fecha', models.DateTimeField(auto_now_add=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.curso')),
                ('estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.estudiante')),
                ('matricula', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.matricula')),
            ],
        ),
        migrations.CreateModel(
            name='Docente',
            fields=[
                ('dni', models.CharField(max_length=8, primary_key=True, serialize=False)),
                ('apellidoPaterno', models.CharField(max_length=50)),
                ('apellidoMaterno', models.CharField(max_length=50)),
                ('nombres', models.CharField(max_length=50)),
                ('fechaNacimiento', models.DateField()),
                ('sexo', models.CharField(choices=[('F', 'Femenino'), ('M', 'Masculino')], default='F', max_length=1)),
                ('vigencia', models.BooleanField(default=True)),
                ('curso', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Cursos_DVG.curso')),
            ],
        ),
    ]
