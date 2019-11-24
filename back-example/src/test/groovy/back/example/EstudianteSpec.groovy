package back.example

import grails.test.hibernate.HibernateSpec

//end::imports[]

//tag::spec[]
//tag::hibernateSpec[]
@SuppressWarnings(['MethodName', 'DuplicateNumberLiteral'])
class EstudianteSpec extends HibernateSpec {
    void 'test domain class validation'() {
    //end::testName[]
        //tag::testInvalid[]
        when: 'A domain class is saved with invalid data'
        Estudiante estudiante = new Estudiante(nombre: '', correo: '', nivel: '', matricula: '', licenciatura: '', maestria: '', doctorado: '', semetre: 0)
        estudiante.save()

        then: 'There were errors and the data was not saved'
        estudiante.hasErrors()
        estudiante.errors.getFieldError('nombre')
        estudiante.errors.getFieldError('correo')
        estudiante.errors.getFieldError('nivel')
        estudiante.errors.getFieldError('matricula')
        estudiante.errors.getFieldError('licenciatura')
        estudiante.errors.getFieldError('maestria')
        estudiante.errors.getFieldError('doctorado')
        estudiante.errors.getFieldError('semetre')
        Estudiante.count() == 0
        //end::testInvalid[]

        //tag::testValid[]
        when: 'A valid domain is saved'
        estudiante.nombre = 'Adrian Velazco'
        estudiante.correo = 'AdrianV@gmail.com'
        estudiante.nivel = 'Bachillerato'
        estudiante.matricula = '123456789'
        estudiante.licenciatura = ''
        estudiante.maestria = ''
        estudiante.doctorado = ''
        estudiante.semetre = 1
        estudiante.save()

        then: 'The product was saved successfully'
        Estudiante.count() == 1
        //end::testValid[]
    }
}



