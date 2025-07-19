import React, { useState, useEffect } from 'react';
import { Download, Mail, MessageCircle, Youtube, Instagram, ExternalLink, Eye, Printer, Code, Palette, Camera, Zap, Star, Award, Calendar, MapPin, Phone, Send } from 'lucide-react';
import resumePDF from '/Zerihun-kassahun.pdf';
import image1 from '/1.jpg';
// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll to Portfolio section
  const handleViewPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Palette className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Zerihun kassahun
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Creative
              <span className="block bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                Photoshop Artist
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Visual Storyteller & Digital Design Specialist
            </p>
          </div>

          {/* Short Bio */}
          <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
            Hi, I'm <span className="text-cyan-400 font-semibold">Zerihun</span> - a passionate Photoshop artist specializing in digital design, photo manipulation, and creative visual storytelling. I transform ideas into stunning visual experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={resumePDF}
              download
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center space-x-2 group"
            >
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              <span>Download CV</span>
            </a>
            <button
              type="button"
              onClick={handleViewPortfolio}
              className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2"
            >
              <Eye className="w-5 h-5" />
              <span>View Portfolio</span>
            </button>
          </div>
        </div>

        {/* Right Content - Portrait */}
        <div className={`lg:w-1/2 mt-16 lg:mt-0 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative">
            <div className="w-80 h-80 mx-auto lg:w-96 lg:h-96 relative">
              {/* Glowing border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full blur-sm opacity-75 animate-pulse"></div>
              {/* Portrait container */}
              <div className="relative w-full h-full bg-gray-800 rounded-full overflow-hidden border-4 border-gray-700">
                <img
                  src="https://zerihun-kassahun.netlify.app/assets/pic1-D1HTJ2o8.jpg"
                  alt="Zerihun - Photoshop Artist"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// PDF Viewer Section
const PDFViewerSection = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">My Resume</h2>
          <p className="text-gray-400 text-lg">View my complete CV or download it for your records</p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">

          <div className="w-full h-96 bg-gray-700/50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-600">
            <iframe
              src={resumePDF}
              title="Resume PDF"
              className="w-full h-full rounded-lg border-none"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 text-lg">My creative journey with Adobe Photoshop</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey with Photoshop began as a passion for transforming ordinary images into extraordinary visual stories. Over the years, I've mastered the art of digital composition, color grading, and photo manipulation.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in creating stunning visuals for YouTube thumbnails, social media graphics, poster designs, and professional photo retouching. Every project is an opportunity to push creative boundaries.
              </p>

              {/* Tools */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Core Tools & Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-gray-300">Adobe Photoshop</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      <Camera className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Camera Raw</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                      <Palette className="w-4 h-4 text-orange-400" />
                    </div>
                    <span className="text-gray-300">Adobe Illustrator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-gray-300">Photo Retouching</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-pink-400" />
                    </div>
                    <span className="text-gray-300">Poster Design</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Design Philosophy</h3>
              <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 p-6 rounded-xl border border-gray-700">
                <p className="text-gray-300 italic text-lg leading-relaxed">
                  "Every pixel tells a story. My mission is to craft visuals that not only capture attention but evoke emotion and inspire action. Through meticulous attention to detail and creative innovation, I bring ideas to life."
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">100+</div>
                  <div className="text-gray-400 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">5+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">50+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section
const SkillsSection = () => {
  const skills = [
    { name: 'Photo Compositing', level: 95, color: 'cyan' },
    { name: 'Color Grading', level: 90, color: 'pink' },
    { name: 'Text Effects', level: 88, color: 'purple' },
    { name: 'Skin Retouching', level: 92, color: 'blue' },
    { name: 'Digital Painting', level: 85, color: 'green' },
    { name: 'Adobe Illustrator', level: 82, color: 'orange' },
    { name: 'UI/UX Design', level: 80, color: 'yellow' }
  ];

  const softSkills = [
    'Attention to Detail',
    'Creative Problem Solving',
    'Client Communication',
    'Project Management',
    'Time Management',
    'Continuous Learning'
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-gray-400 text-lg">Technical proficiency meets creative vision</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r from-${skill.color}-500 to-${skill.color}-400 transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{skill}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section
const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Freelance Photoshop Designer',
      company: 'Freelance',
      period: '2024- Present',
      location: 'Remote',
      responsibilities: [
        'Designed thumbnails and cover art for YouTube creators',
        'Edited promotional posters for social media',
        'Delivered visually engaging projects using Adobe Photoshop &  Adobe Illustrator',
      ]
    },
    {
      title: 'Graphics Designer',
      company: 'Tsinal Studio',
      period: '2020-2023',
      location: 'Arbaminch',
      responsibilities: [
        'Edited and retouched high volumes of wedding and event photos to client specifications.',
        'Applied advanced color correction, skin retouching, and background enhancements using Adobe Photoshop and Lightroom.',
        'Collaborated with photographers and clients to meet quality standards and deadlines.',
      ]
    },
    {
      title: 'Photo Editor',
      company: 'Yishal Digital Studio',
      period: '2018-2020',
      location: 'Arbaminch',
      responsibilities: [
        'Performed detailed photo edits for various client requests including ID photos, family portraits, and ceremonies.',
        'Optimized images for print and digital delivery, ensuring sharpness and accurate color.',
        'Managed file storage and backup system to ensure workflow efficiency and data safety.',
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Work Experience</h2>
          <p className="text-gray-400 text-lg">Professional journey and achievements</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-pink-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full border-4 border-gray-800"></div>

                  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-cyan-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right mt-2 lg:mt-0">
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-gray-300 flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Portfolio Section
const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Banner',
      category: 'Branding',
      image: image1,
      tools: 'Photoshop, Camera Raw'
    },
    {
      id: 2,
      title: 'Brand Identity Package',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      tools: 'Photoshop, Illustrator'
    },
    {
      id: 3,
      title: 'Portrait Retouching',
      category: 'Photo Manipulation',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      tools: 'Photoshop, Lightroom'
    },
    {
      id: 4,
      title: 'Album Cover Design',
      category: 'Music Industry',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      tools: 'Photoshop, Cinema 4D'
    },
    {
      id: 5,
      title: 'Digital Art Composition',
      category: 'Digital Art',
      image: 'https://images.pexels.com/photos/1084687/pexels-photo-1084687.jpeg',
      tools: 'Photoshop, Wacom'
    },
    {
      id: 6,
      title: 'Marketing Campaign',
      category: 'Advertising',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      tools: 'Photoshop, After Effects'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Portfolio</h2>
          <p className="text-gray-400 text-lg">Selected works showcasing creative excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{project.category}</p>
                  <p className="text-gray-300 text-xs">{project.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
            <div className="bg-gray-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-gray-900/80 rounded-full flex items-center justify-center text-white hover:bg-gray-900 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-cyan-400 mb-4">{selectedProject.category}</p>
                <p className="text-gray-300 mb-4">Tools used: {selectedProject.tools}</p>
                <p className="text-gray-400">
                  This project showcases advanced Photoshop techniques including compositing, color grading, and digital manipulation to create visually stunning results.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's collaborate on your next creative project</p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors"
                    placeholder="Project collaboration"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Email</p>
                    <p className="text-gray-400">zerihunkanibo13@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Telegram</p>
                    <p className="text-gray-400">@Yize_Adobe_Effects</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300">
                  <Youtube className="w-6 h-6 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-pink-500/10 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">24h</div>
                  <div className="text-gray-400 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">100%</div>
                  <div className="text-gray-400 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Palette className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
              Zerihun
            </span>
          </div>
          <p className="text-gray-400 text-center md:text-right">
            © 2024 Zerihun (Yizefx). All rights reserved. | Creative Photoshop Artist & Visual Storyteller
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection />
      <PDFViewerSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;