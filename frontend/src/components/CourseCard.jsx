
const CourseCard = ({ course }) => {
   const getIconColor = (id) => {
      const colors = ["bg-blue-100 text-blue-600", "bg-purple-100 text-purple-600", "bg-pink-100 text-pink-600", "bg-green-100 text-green-600"];
      return colors[id % colors.length] || colors[0];
   };

   return (
      <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
         <div className="p-6 flex-1">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getIconColor(course.id)}`}>
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
               </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{course.description}</p>
         </div>

         <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <button className="text-indigo-600 font-medium text-sm hover:text-indigo-800 flex items-center cursor-pointer">
               Voir le cours <span className="ml-1">→</span>
            </button>
         </div>
      </div>
   );
};

export default CourseCard;