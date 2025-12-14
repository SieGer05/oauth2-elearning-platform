package ma.sieger.oauth2elearningplatform.repository;

import ma.sieger.oauth2elearningplatform.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CourseRepository extends JpaRepository<Course, Long> {}