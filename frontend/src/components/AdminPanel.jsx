import { useState } from "react";
import api from "../api/axios"; 

const AdminPanel = ({ onCourseAdded }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);

      api.post("/courses", {
         title: title,
         description: desc,
      })
      .then(() => {
        setTitle("");
        setDesc("");
        onCourseAdded(); 
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          alert("Accès refusé : Vous n'êtes pas Admin !");
        } else {
          console.error(error);
          alert("Erreur lors de l'ajout du cours.");
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="mb-10 bg-white rounded-xl shadow-md border border-indigo-100 overflow-hidden">
      <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
         <h2 className="text-indigo-900 font-bold flex items-center">
            <span className="mr-2">🛠️</span> Panneau Administrateur
         </h2>
         <span className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
            Ajouter un nouveau cours
         </span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col md:flex-row gap-4 items-end">
        
         <div className="flex-1 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
               Titre du module
            </label>
            <input
               type="text"
               className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
               placeholder="Ex: Architecture Microservices"
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               required
            />
        </div>

         <div className="flex-2 w-full">
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">
               Description courte
            </label>
            <input
               type="text"
               className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
               placeholder="Ex: Concepts avancés, patterns et bonnes pratiques..."
               value={desc}
               onChange={(e) => setDesc(e.target.value)}
               required
            />
         </div>

         <button
            type="submit"
            disabled={loading}
            className={`h-10.5 px-6 rounded-lg font-bold text-white transition-all shadow-md flex items-center justify-center min-w-30 cursor-pointer ${
               loading
               ? "bg-gray-400 cursor-not-allowed"
               : "bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg"
            }`}
         >
            {loading ? (
               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
               "Ajouter +"
            )}
        </button>
      </form>
    </div>
  );
};

export default AdminPanel;