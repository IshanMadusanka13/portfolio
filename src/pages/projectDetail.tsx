const tabs = [
    { id: 'overview', label: 'Overview', icon: RiEyeLine },
    { id: 'features', label: 'Features', icon: RiStarLine },
    { id: 'tech', label: 'Technologies', icon: RiCodeLine },
  ];import React, { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../utils/constants";
import { 
  RiRadioButtonFill, 
  RiExternalLinkLine, 
  RiGithubLine, 
  RiPlayFill,
  RiArrowLeftLine,
  RiEyeLine,
  RiCodeLine,
  RiStarLine,
  RiShareLine
} from "react-icons/ri";

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-2xl">
          <div className="w-24 h-24 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
            <RiEyeLine className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Link href="/#projects">
            <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              <RiArrowLeftLine className="w-5 h-5" />
              Back to Projects
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        
        <Link href="/#projects">
          <button className="absolute top-8 left-8 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300 group">
            <RiArrowLeftLine className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
        </Link>

        <button className="absolute top-8 right-8 z-20 bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300">
          <RiShareLine className="w-6 h-6" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-3 space-y-12">
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <RiEyeLine className="w-6 h-6 text-blue-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Project Overview</h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>

            {project.demoVideo && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <RiPlayFill className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Demo</h3>
                  </div>
                  <div className="relative group">
                    <div className="relative w-full h-64 md:h-96 bg-gray-900 rounded-2xl overflow-hidden">
                      {!isVideoPlaying ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            alt={`${project.name} demo`}
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <button
                              onClick={() => setIsVideoPlaying(true)}
                              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110"
                            >
                              <RiPlayFill className="w-10 h-10 text-white ml-1" />
                            </button>
                          </div>
                        </div>
                      ) : (
                        <video
                          className="w-full h-full object-cover"
                          controls
                          autoPlay
                          poster={project.image.src}
                        >
                          <source src={project.demoVideo} type="video/mp4" />
                          <source src={project.demoVideo} type="video/quicktime" />
                          <source src={project.demoVideo} type="video/mov" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {project.features && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                      <RiStarLine className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <RiRadioButtonFill className="w-3 h-3 text-blue-600" />
                        </div>
                        <p className="text-gray-700 font-medium">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {project.technologies && (
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                      <RiCodeLine className="w-6 h-6 text-purple-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Technologies Used</h2>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {project.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl hover:from-blue-50 hover:to-blue-100 transition-all duration-200">
                        <RiRadioButtonFill className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-gray-800">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Type</span>
                  <span className="text-gray-900 font-medium">{project.type}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {project.projectUrl && (
                  <a href={project.projectUrl} target="_blank" rel="noreferrer" className="block">
                    <button className="w-full flex items-center gap-3 p-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl transition-colors">
                      <RiGithubLine className="w-5 h-5" />
                      View Repository
                    </button>
                  </a>
                )}
                <Link href="/#projects">
                  <button className="w-full flex items-center gap-3 p-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl transition-colors">
                    <RiArrowLeftLine className="w-5 h-5" />
                    Back to Projects
                  </button>
                </Link>
              </div>
            </div>

            {project.technologies && (
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 6).map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 6 && (
                    <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                      +{project.technologies.length - 6} more
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;