import React from 'react'

const Loading = () => {
   return (
   <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
      <p className="mt-4 text-gray-600 font-medium">Connexion en cours...</p>
   </div>
  );
}

export default Loading