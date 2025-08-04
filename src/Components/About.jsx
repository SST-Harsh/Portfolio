import { lazy } from "react";
import harsh from "../assets/harsh.jpg"
export default function About() {
  return (
    <section id="about" className="w-full py-20 bg-gray-700">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              About <span className="text-indigo-600">Me</span>
            </h1>
            <div className="space-y-4">
              <p className="text-lg text-gray-100 leading-relaxed">
                I'm Harsh, a passionate full-stack developer specializing in modern web technologies. With expertise in the MERN stack, I build interactive, responsive, and scalable web applications.
              </p>
              <p className="text-lg text-gray-100 leading-relaxed">
                My development philosophy centers around clean code, intuitive UX, and performance optimization. I enjoy solving complex problems and turning ideas into functional, beautiful digital experiences.
              </p>
              <p className="text-lg text-gray-100 leading-relaxed">
                Currently expanding my skills in cloud computing (AWS) and advanced React patterns, while contributing to open-source projects in my spare time.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap  gap-2 md:gap-4">
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                MongoDB
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
               Express.js
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                 React.js
              </span>
              <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                Node.js
              </span>
            </div>
          </div>

          {/* Visual Element */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-indigo-100 rounded-full overflow-hidden border-4 border-white shadow-xl">
              {/* Placeholder for your image or illustration */}
              <div className="w-full h-full flex items-center justify-center text-indigo-400">
                  <img loading="lazy" onLoad={lazy} src={harsh} className=" object-center p-0.5" />
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}