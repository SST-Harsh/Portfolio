import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import {  forwardRef } from "react"
const Projects=forwardRef((props, ref) => {
  return (
    <section id="projects"  ref={ref} className="w-full py-20  bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            My <span className="text-indigo-600">Projects</span>
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing different technical skills.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl   transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={p1} 
                alt="EventScape Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-100 mb-2">EventScape</h3>
              <p className="text-gray-100 mb-4">
                Full-featured online event management system with payments and admin dashboard
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">HTML</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">CSS</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">MySql</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">SpringBoot</span>
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-indigo-500 hover:text-indigo-800 font-medium" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
                <a href="#" className="text-gray-100 hover:text-gray-100 font-medium" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={p2} 
                alt="Khana_Khazana Project"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-100 mb-2">Khana_Khazana</h3>
              <p className="text-gray-100 mb-4">
                Food Blog Website with admin user dashboard and features
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">React.js</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">MongoDB</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">Tailwind CSS</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">Express.js</span>
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-indigo-500 hover:text-indigo-800 font-medium" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
                <a href="#" className="text-gray-100 hover:text-gray-200 font-medium" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={p1} 
                alt="Weather Application"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-100 mb-2">Weather Application</h3>
              <p className="text-gray-100 mb-4">
                Real-time weather forecasting with interactivity
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">React</span>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">OpenWeather API</span>
              </div>
              <div className="flex justify-between">
                <a href="#" className="text-indigo-500 hover:text-indigo-800 font-medium" target="_blank" rel="noopener noreferrer">
                  Live Demo →
                </a>
                <a href="#" className="text-gray-100 hover:text-gray-200 font-medium" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
})
export default Projects