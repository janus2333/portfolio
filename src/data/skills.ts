/**
 * 技能数据类型定义
 */
export interface Skill {
  name: string
  level: number // 0-100, 熟练程度百分比
  category: 'frontend' | 'backend' | 'tools' | 'soft'
}

export interface SkillCategory {
  id: string
  title: string
  icon: string
  skills: Skill[]
}

/**
 * 技能分类数据
 */
export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90, category: 'frontend' },
      { name: 'TypeScript', level: 85, category: 'frontend' },
      { name: 'Tailwind CSS', level: 88, category: 'frontend' },
      { name: 'Next.js', level: 80, category: 'frontend' },
      { name: 'HTML/CSS', level: 95, category: 'frontend' },
      { name: 'JavaScript', level: 92, category: 'frontend' }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 82, category: 'backend' },
      { name: 'Python', level: 78, category: 'backend' },
      { name: 'Express', level: 80, category: 'backend' },
      { name: 'MongoDB', level: 75, category: 'backend' },
      { name: 'PostgreSQL', level: 72, category: 'backend' },
      { name: 'REST API', level: 85, category: 'backend' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    icon: '🛠️',
    skills: [
      { name: 'Git', level: 90, category: 'tools' },
      { name: 'Docker', level: 70, category: 'tools' },
      { name: 'AWS', level: 65, category: 'tools' },
      { name: 'CI/CD', level: 72, category: 'tools' },
      { name: 'Linux', level: 75, category: 'tools' },
      { name: 'Figma', level: 80, category: 'tools' }
    ]
  },
  {
    id: 'soft',
    title: 'Soft Skills',
    icon: '💡',
    skills: [
      { name: 'Problem Solving', level: 90, category: 'soft' },
      { name: 'Team Collaboration', level: 88, category: 'soft' },
      { name: 'Communication', level: 85, category: 'soft' },
      { name: 'Time Management', level: 82, category: 'soft' },
      { name: 'Leadership', level: 78, category: 'soft' },
      { name: 'Adaptability', level: 92, category: 'soft' }
    ]
  }
]

/**
 * 所有技能列表(扁平化)
 */
export const allSkills: Skill[] = skillCategories.flatMap(category => category.skills)
