package ma.sieger.oauth2elearningplatform;

import ma.sieger.oauth2elearningplatform.entity.Course;
import ma.sieger.oauth2elearningplatform.repository.CourseRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class Oauth2ElearningPlatformApplication {

    public static void main(String[] args) {
        SpringApplication.run(Oauth2ElearningPlatformApplication.class, args);
    }

    @Bean
    CommandLineRunner start(CourseRepository courseRepository) {
        return args -> {
            courseRepository.saveAll(List.of(
                    new Course(null, "Introduction à la Cybersécurité", "Les bases des attaques et défenses (SOC, SIEM)."),
                    new Course(null, "Développement Sécurisé avec Java", "OWASP Top 10 et Spring Security."),
                    new Course(null, "React & OAuth2", "Intégration OIDC avec Keycloak côté Frontend.")
            ));

            System.out.println("---> Base de données H2 initialisée avec 3 cours <---");

            courseRepository.findAll().forEach(course ->
                    System.out.println("   - " + course.getTitle())
            );
        };
    }
}