import React from 'react';
import { LineChart, Search, Brain, Code } from 'lucide-react';

const projects = [
  {
    title: "NivrritiMarg",
    icon: <LineChart className="h-6 w-6 text-green-500" />,
    description: "Investment allocation planner using LSTM and yfinance to analyze Indian stocks, mutual funds, and assets for personalized recommendations.",
    tech: ["Python", "LSTM", "yfinance", "ML"],
    github: "https://github.com/sharuvaruu/NivrritiMarg"
  },
  {
    title: "Cross-Lingual Search",
    icon: <Search className="h-6 w-6 text-blue-500" />,
    description: "Full-stack application enabling cross-language search between English and Hindi using advanced NLP/DL techniques.",
    tech: ["TypeScript", "NLP", "Deep Learning", "Full Stack"],
    github: "https://github.com/sharuvaruu/Cross-Lingual-Information-Retrival"
  },
  {
    title: "Text Clustering & Topic Modeling",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    description: "Advanced text analysis project exploring data preprocessing, clustering, and topic modeling on idea datasets.",
    tech: ["Python", "NLP", "ML", "Data Science"],
    github: "https://github.com/sharuvaruu/text-clustering-topic-modelling"
  },
  {
    title: "Cyber Cafe Management",
    icon: <Code className="h-6 w-6 text-indigo-500" />,
    description: "A comprehensive system developed in C to streamline the management of cyber cafes and coworking spaces.",
    tech: ["C", "File Handling", "Data Structures"],
    github: "https://github.com/sharuvaruu/CYBER-CAFE-MANAGEMENT-PROJECT-IN-C"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Projects</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical journey through AI/ML, data analysis, and software development
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 h-24">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-gray-50 rounded-lg text-sm text-gray-600">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}