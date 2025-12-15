<p align="center">
  <img src="./screenshots/keycloak-logo.png" alt="Fennec Logo" width="200"/>
</p>

<h1 align="center">OAuth2/OIDC E-Learning Platform</h1>

<div align="center">
  <p>
      <strong>Secure Microservices Architecture with Spring Boot 3, React 18, and Keycloak</strong>
  </p>

   <p align="center">
      <img src="https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white">
      <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
      <img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white">
      <img src="https://img.shields.io/badge/Apache%20Maven-C71A36?style=for-the-badge&logo=Apache%20Maven&logoColor=white">
   </p>

  <p>
    A full-stack implementation of an E-Learning platform demonstrating modern security practices using the OAuth 2.0 Authorization Code Flow with PKCE. The system enforces Role-Based Access Control (RBAC) to differentiate between Administrators and Students.
  </p>

  <p>
    <a href="#architecture">Architecture</a> &bull;
    <a href="#technologies">Technologies</a> &bull;
    <a href="#keycloak-configuration">Keycloak Setup</a> &bull;
    <a href="#installation">Installation</a> &bull;
    <a href="#application-demo">Screenshots</a>
  </p>
</div>

<hr />

<h2 id="architecture">Architecture Overview</h2>

<p>
  The application follows a decoupled architecture where authentication is delegated to an Identity Provider (Keycloak). The frontend communicates with the backend via REST APIs secured by JWT (JSON Web Tokens).
</p>

<ul>
  <li><strong>Identity Provider (IdP):</strong> Keycloak handles user authentication and issues tokens.</li>
  <li><strong>Resource Server (Backend):</strong> Spring Boot validates JWT signature and roles.</li>
  <li><strong>Client (Frontend):</strong> React (Vite) manages the user session and OIDC flow using <code>keycloak-js</code>.</li>
</ul>

<h2 id="technologies">Technologies Used</h2>

<h3>Backend</h3>
<ul>
  <li><strong>Framework:</strong> Spring Boot 3.4.0</li>
  <li><strong>Security:</strong> Spring Security 6 (OAuth2 Resource Server)</li>
  <li><strong>Database:</strong> H2 Database (Embedded)</li>
  <li><strong>Build Tool:</strong> Maven</li>
</ul>

<h3>Frontend</h3>
<ul>
  <li><strong>Framework:</strong> React 18 (Vite)</li>
  <li><strong>Styling:</strong> Tailwind CSS</li>
  <li><strong>HTTP Client:</strong> Axios (with Interceptors)</li>
  <li><strong>Auth Library:</strong> keycloak-js (Native Adapter)</li>
</ul>

<hr />

<h2 id="keycloak-configuration">Keycloak Configuration Guide</h2>

<p>
  This section details the configuration steps performed on the Keycloak server to enable OIDC authentication.
</p>

<h3>1. Realm Creation</h3>
<p>Created a dedicated realm named <code>elearning-realm</code> to isolate the application data.</p>
<div align="center">
  <img src="screenshots/01-keykloak_create_realm.png" alt="Create Realm" width="800" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<h3>2. Client Configuration</h3>
<p>Configured a public client <code>react-client</code> with standard OIDC flows. Valid Redirect URIs were configured to allow communication with the frontend application.</p>
<div align="center">
  <img src="screenshots/02-create_client.png" alt="Create Client Step 1" width="800" style="border: 1px solid #ddd; border-radius: 5px; margin-bottom: 10px;">
  <img src="screenshots/03-create_client.png" alt="Create Client Step 2" width="800" style="border: 1px solid #ddd; border-radius: 5px; margin-bottom: 10px;">
  <img src="screenshots/04-create_client.png" alt="Create Client Settings" width="800" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<h3>3. Role Definition</h3>
<p>Defined two primary Realm Roles: <code>ROLE_STUDENT</code> and <code>ROLE_ADMIN</code> to manage access permissions.</p>
<div align="center">
  <img src="screenshots/05-create_role_student.png" alt="Create Student Role" width="400" style="border: 1px solid #ddd; border-radius: 5px; margin-right: 10px;">
  <img src="screenshots/06-create_role_admin.png" alt="Create Admin Role" width="400" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<h3>4. User Management</h3>
<p>Created test users and assigned specific roles to simulate different authorization scenarios.</p>

<strong>Creating Users:</strong>
<div align="center">
  <img src="screenshots/07-create_user_student.png" alt="Create User" width="800" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<strong>Role Assignment:</strong>
<div align="center">
  <img src="screenshots/08-assign_student_role.png" alt="Assign Roles" width="800" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<strong>Credentials Setup:</strong>
<div align="center">
  <img src="screenshots/09-set_password_student.png" alt="Set Password" width="800" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<strong>Final User List:</strong>
<div align="center">
  <img src="screenshots/10-list_of_users.png" alt="List of Users" width="800" style="border: 1px solid #ddd; border-radius: 5px;">
</div>

<hr />

<h2 id="installation">Installation & Setup</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Java Development Kit (JDK) 17 or higher</li>
  <li>Node.js (v18 or higher)</li>
  <li>Keycloak Server (Running on port 8080)</li>
</ul>

<h3>1. Backend Setup</h3>
<pre>
<code>cd backend
./mvnw clean install
./mvnw spring-boot:run</code>
</pre>
<p>The server will start on <strong>http://localhost:8081</strong>.</p>

<h3>2. Frontend Setup</h3>
<pre>
<code>cd frontend
npm install
npm run dev</code>
</pre>
<p>The application will be accessible at <strong>http://localhost:5173</strong>.</p>

<hr />

<h2 id="application-demo">Application Demo</h2>

<p>The application dynamically renders content based on the logged-in user's role.</p>

<h3>Admin View</h3>
<p>Users with <code>ROLE_ADMIN</code> access the dashboard with full privileges, including the ability to add new courses via the administration panel.</p>
<div align="center">
  <img src="screenshots/11-admin_panel.png" alt="Admin Panel Interface" width="900" style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>

<h3>Student View</h3>
<p>Users with <code>ROLE_STUDENT</code> have read-only access. They can view available modules but do not see administrative options.</p>
<div align="center">
  <img src="screenshots/12-student_panel.png" alt="Student Panel Interface" width="900" style="border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>

<hr />

<h2 id="license">Security Implementation Details</h2>
<p>
  <strong>JWT Converter:</strong> A custom <code>KeycloakRoleConverter</code> was implemented in the Spring Boot backend to map Keycloak's <code>realm_access</code> roles to Spring Security's <code>GrantedAuthority</code> format.
</p>
<p>
  <strong>CORS Policy:</strong> Strict Cross-Origin Resource Sharing policies are applied to allow requests only from the trusted frontend origin.
</p>

<div align="center">
  <p>&copy; 2025 OAuth2 E-Learning Platform Project.</p>
</div>