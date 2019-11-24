package back.example

import grails.gorm.services.Service

@Service(Estudiante)
interface EstudianteService {

    List<Estudiante> findByNameLike(String name, Map args)
}
