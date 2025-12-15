import { logo } from "../assets";

const Navbar = ({ client }) => {
  const username = client.tokenParsed?.preferred_username || "Utilisateur";
  const isAdmin = client.hasRealmRole("ROLE_ADMIN");

  return (
    <nav className="bg-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
         <div className="flex items-center space-x-3">
            <img 
               src={logo} 
               alt="Logo E-Learning" 
               className="h-10 w-auto object-contain" 
            />
            <h1 className="text-xl font-bold tracking-wide">E-Learning Secure</h1>
         </div>

         <div className="flex items-center gap-6">
            <div className="hidden md:flex flex-col text-right">
               <span className="font-semibold text-sm">{username}</span>
               <span className={`text-xs px-2 py-0.5 rounded-full inline-block text-center mt-1 font-bold ${
               isAdmin ? "bg-yellow-400 text-yellow-900" : "bg-green-400 text-green-900"
               }`}>
               {isAdmin ? "ADMINISTRATEUR" : "ÉTUDIANT"}
               </span>
            </div>

            <button
               onClick={() => client.logout()}
               className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition duration-200 border border-white/20 text-sm font-medium cursor-pointer"
            >
               Se déconnecter
            </button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;