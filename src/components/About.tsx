import { motion } from 'framer-motion'
import { skillCategories } from '../data/skills'

/**
 * About组件 - 关于我区域
 * 包含个人详细介绍和技能列表展示
 */
const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate developer with a love for creating beautiful and functional web experiences
          </p>
        </motion.div>

        {/* 个人介绍 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 sm:p-12 border border-purple-500/20 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Hello! I'm a passionate full-stack developer with over 5 years of experience 
                building modern web applications. I specialize in React, TypeScript, and Node.js, 
                with a strong focus on creating intuitive user experiences and scalable solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My journey in tech started when I built my first website at 15. Since then, 
                I've worked with startups and established companies, helping them bring their 
                ideas to life through clean, efficient code. I believe in writing code that is 
                not only functional but also maintainable and well-documented.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge through technical blog posts. 
                I'm always eager to learn and take on new challenges that push me to grow as a developer.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 技能分类 */}
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <SkillCategory
              key={category.id}
              category={category}
              index={categoryIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * 技能分类组件
 */
interface SkillCategoryProps {
  category: {
    id: string
    title: string
    icon: string
    skills: Array<{
      name: string
      level: number
      category: string
    }>
  }
  index: number
}

const SkillCategory = ({ category, index }: SkillCategoryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-gradient-to-br from-gray-900/30 to-gray-800/30 rounded-2xl p-6 sm:p-8 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
    >
      {/* 分类标题 */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{category.icon}</span>
        <h3 className="text-2xl font-bold text-white">{category.title}</h3>
      </div>

      {/* 技能列表 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillItem
            key={skill.name}
            skill={skill}
            index={skillIndex}
          />
        ))}
      </div>
    </motion.div>
  )
}

/**
 * 单个技能项组件
 */
interface SkillItemProps {
  skill: {
    name: string
    level: number
    category: string
  }
  index: number
}

const SkillItem = ({ skill, index }: SkillItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.02 }}
      className="group"
    >
      {/* 技能名称和百分比 */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 font-medium group-hover:text-purple-400 transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
      </div>

      {/* 进度条 */}
      <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
        />
      </div>
    </motion.div>
  )
}

export default About
