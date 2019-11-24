package back.example

import grails.rest.RestfulController
import groovy.transform.CompileStatic

@CompileStatic
class EstudianteController extends RestfulController {
    static responseFormats = ['json', 'xml']
    EstudianteController() {
        super(Estudiante)
    }
    EstudianteService estudianteService
    //end::controller[]

    // tag::searchAction[]
    def search(String q, Integer max ) { // <1>
        if (q) {
            //tag::respond[]
            respond estudianteService.findByNameLike("%${q}%".toString(), [max: Math.min( max ?: 10, 100)]) // <3>
            //end::respond[]
        }
        else {
            respond([]) // <4>
        }
    }
}


