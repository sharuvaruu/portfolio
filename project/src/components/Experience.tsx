import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: "work",
    icon: <Briefcase className="h-6 w-6 text-purple-500" />,
    title: "Secretary",
    organization: "Training & Placement Cell, SGGSIE&T",
    period: "Jul 2023 - Jul 2024",
    description: [
      "Leading placement initiatives and coordinating with companies",
      "Organizing training sessions and workshops for students",
      "Managing documentation and communication with stakeholders"
    ]
  },
  {
    type: "work",
    icon: <Briefcase className="h-6 w-6 text-blue-500" />,
    title: "English Committee Head",
    organization: "Team Drishti, SGGSIE&T",
    period: "Oct 2022 - Dec 2023",
    description: [
      "Led English Committee at 'Drishti' college magazine",
      "Refined writing, content creation, and editorial skills",
      "Produced captivating articles and narratives"
    ]
  },
  {
    type: "education",
    icon: <GraduationCap className="h-6 w-6 text-indigo-500" />,
    title: "B.Tech in Information Technology",
    organization: "SGGSIE&T",
    period: "2020 - 2024",
    description: [
      "Key coursework: DSA, OOPs, DBMS, BDA, OS, Project Management, DL, Soft Computing",
      "Active member of technical clubs and communities",
      "Specializing in AI/ML and Data Analytics"
    ]
  },
  {
    type: "certification",
    icon: <Award className="h-6 w-6 text-green-500" />,
    title: "Professional Certifications",
    organization: "Google Cloud & Others",
    period: "2021 - Present",
    description: [
      "Creating Image Captioning Models (Google Cloud)",
      "Introduction to Generative AI & Large Language Models",
      "Machine Learning Algorithms (Great Learning)",
      "Programming for Everybody - Python (Coursera)"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Experience & Education</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          My academic journey, leadership roles, and professional development
        </p>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                {exp.icon}
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                  <p className="text-purple-600">{exp.organization}</p>
                </div>
                <span className="ml-auto text-gray-500">{exp.period}</span>
              </div>
              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-purple-500"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}