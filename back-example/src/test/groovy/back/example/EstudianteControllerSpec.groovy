package back.example

import grails.plugin.json.view.mvc.JsonViewResolver
import grails.test.hibernate.HibernateSpec
import grails.testing.web.controllers.ControllerUnitTest

//tag::spec[]
@SuppressWarnings('MethodName')
class EstudianteControllerSpec extends HibernateSpec implements ControllerUnitTest<EstudianteController> {

    static doWithSpring = {
        jsonSmartViewResolver(JsonViewResolver)
    }
    //end::config[]

    //tag::test[]
    void 'test the search action finds results'() {
        given:
        controller.estudianteService = Stub(EstudianteService) {
            findByNameLike(_, _) >> [new Estudiante(nombre: 'Adrian Velazco', correo: 'AdrianV@gmail.com', nivel: 'Bachillerato', matricula: '123456789', licenciatura: '', maestria: '', doctorado: '', semetre: 1)]
        }
        when: 'A query is executed that finds results'
        controller.search('pp', 10)

        then: 'The response is correct'
        response.json.size() == 1
        response.json[0].name == 'Adrian Velazco'
    }
}