/**
 * 项目数据类型定义
 */
export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  link?: string
  github?: string
}

/**
 * 项目列表数据
 */
export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
    image: 'https://via.placeholder.com/600x400/6B46C1/FFFFFF?text=E-Commerce',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Stripe'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://via.placeholder.com/600x400/EC4899/FFFFFF?text=Task+App',
    technologies: ['React', 'Redux', 'Firebase', 'Tailwind CSS'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.',
    image: 'https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=Weather',
    technologies: ['Vue.js', 'OpenWeather API', 'Chart.js', 'CSS3'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for tracking social media performance, engagement metrics, and audience insights across multiple platforms.',
    image: 'https://via.placeholder.com/600x400/10B981/FFFFFF?text=Analytics',
    technologies: ['Next.js', 'GraphQL', 'PostgreSQL', 'D3.js'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 5,
    title: 'AI Image Generator',
    description: 'Web application that uses AI to generate unique images from text descriptions with custom style options.',
    image: 'https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=AI+Image',
    technologies: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    link: 'https://example.com',
    github: 'https://github.com'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Modern portfolio website showcasing projects and skills with smooth animations and responsive design.',
    image: 'https://via.placeholder.com/600x400/8B5CF6/FFFFFF?text=Portfolio',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://example.com',
    github: 'https://github.com'
  }
]
