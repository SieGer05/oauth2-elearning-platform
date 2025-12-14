package ma.sieger.oauth2elearningplatform.controller;

import lombok.RequiredArgsConstructor;
import ma.sieger.oauth2elearningplatform.entity.Course;
import ma.sieger.oauth2elearningplatform.repository.CourseRepository;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@RequiredArgsConstructor
public class CourseController {
    private final CourseRepository courseRepository;

    @GetMapping
    @PreAuthorize("hasAuthority('ROLE_STUDENT') or hasAuthority('ROLE_ADMIN')")
    public List<Course> getAllCourses(){
        return courseRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasAuthority('ROLE_ADMIN')")
    public Course addCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }
}
