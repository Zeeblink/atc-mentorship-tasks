import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Book, Puzzle } from 'lucide-react'

function App() {
  const tasks = [
    {
      title: 'FAQ Component',
      description: 'An FAQ component using React and Tailwind CSS',
      path: '/faq',
      icon: <Book className="w-6 h-6 text-indigo-500" />,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Random Post Generator',
      description: 'Fetches random posts from an API and displays them',
      path: '/postcard',
      icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      title: 'Browser Extensions UI',
      description: 'A browser extensions UI using React and Tailwind CSS',
      path: '/extensions',
      icon: <Puzzle className="w-6 h-6 text-amber-500" />,
      color: 'from-amber-500 to-orange-500'
    },
  ]

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-20">
        ATC Techrise Mentorship Tasks
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {tasks.map((task) => (
          <div 
            key={task.title} 
            className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className={`h-2 bg-gradient-to-r ${task.color}`}></div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                {task.icon}
                <h2 className="text-xl font-bold text-gray-800 dark:text-white ml-2">
                  {task.title}
                </h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                {task.description}
              </p>
              <Link 
                to={task.path} 
                className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-200 font-medium text-sm transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-600"
              >
                <span>Explore Component</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <p className="mt-12 text-gray-500 dark:text-gray-400 text-sm">
        Built with React, TypeScript and Tailwind CSS
      </p>
    </div>
  )
}

export default App