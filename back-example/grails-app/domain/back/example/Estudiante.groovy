package back.example

import grails.compiler.GrailsCompileStatic

@GrailsCompileStatic
class Estudiante {

    String name
    String correo
    String nivel
    String matricula
    String licenciatura
    String maestria
    String doctorado
    int semestre

    static constraints = {
        name blank:false
        correo blank:false
        nivel blank:false
        matricula blank:false
        licenciatura blank:true
        maestria blank:true
        doctorado blank:true
        semestre blank:false
    }
}

