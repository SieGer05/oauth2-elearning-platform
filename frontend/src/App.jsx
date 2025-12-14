import { useEffect, useState, useRef } from "react";
import keycloak from "./security/keycloak";
import Navbar from "./components/Navbar";
import CourseCard from "./components/CourseCard";
import AdminPanel from "./components/AdminPanel";
import Loading from "./components/Loading";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [courses, setCourses] = useState([]);
  const [loadingCourses, setLoadingCourses] = useState(false);
  
  const isRun = useRef(false);

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;

    keycloak
      .init({ onLoad: "login-required", checkLoginIframe: false })
      .then((auth) => {
        setIsAuthenticated(auth);
        if (auth) {
          fetchCourses();
        }
      })
      .catch((err) => console.error("Erreur Init Keycloak:", err));
  }, []);

  const fetchCourses = () => {
    setLoadingCourses(true);
    fetch("http://192.168.8.101:8081/api/courses", {
      headers: {
        Authorization: `Bearer ${keycloak.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Erreur Fetch:", err))
      .finally(() => setLoadingCourses(false));
  };

  if (!isAuthenticated) return <Loading />;

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar client={keycloak} />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Tableau de bord</h1>
          <p className="text-gray-500 mt-2">Accédez à vos modules de formation et gérez votre progression.</p>
        </div>

        {keycloak.hasRealmRole("ROLE_ADMIN") && (
          <AdminPanel token={keycloak.token} onCourseAdded={fetchCourses} />
        )}

        {loadingCourses ? (
          <div className="text-center py-10 text-gray-500">Chargement des cours...</div>
        ) : courses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-400 text-lg">Aucun cours disponible pour le moment.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;