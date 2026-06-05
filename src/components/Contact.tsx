import { motion } from 'framer-motion'

/**
 * Contact组件 - 联系方式区域
 * 包含邮箱、GitHub、社交媒体链接
 */
const Contact = () => {
  // 联系信息
  const contactInfo = [
    {
      icon: '📧',
      title: '不Email',
      value: 'bu.email@example.com',
      link: 'mailto:your.email@example.com',
      description: 'Send me an email anytime'
    },
    {
      icon: '💼',
      title: '没有LinkedIn',
      value: 'linkedin.com/in/yourprofile',
      link: 'https://linkedin.com/in/yourprofile',
      description: 'Connect with me professionally'
    },
    {
      icon: '🐙',
      title: '这个可以GitHub',
      value: 'https://github.com/janus2333/portfolio',
      link: 'https://github.com/janus2333/portfolio',
      description: 'Check out my code'
    }
  ]

  // 社交媒体链接
  const socialLinks = [
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { name: 'Facebook', icon: '👥', url: 'https://facebook.com' },
    { name: 'Dribbble', icon: '🏀', url: 'https://dribbble.com' }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a] relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        {/* 联系卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <ContactCard key={info.title} info={info} index={index} />
          ))}
        </div>

        {/* 联系表单 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-8 sm:p-12 border border-purple-500/20 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Send Me a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity shadow-lg hover:shadow-purple-500/50"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* 社交媒体链接 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-white mb-6">Follow Me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-purple-500/30 rounded-full text-gray-300 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
              >
                <span className="text-xl">{social.icon}</span>
                <span className="font-medium">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/**
 * 联系卡片组件
 */
interface ContactCardProps {
  info: {
    icon: string
    title: string
    value: string
    link: string
    description: string
  }
  index: number
}

const ContactCard = ({ info, index }: ContactCardProps) => {
  return (
    <motion.a
      href={info.link}
      target={info.link.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 block"
    >
      <div className="text-4xl mb-4">{info.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
        {info.title}
      </h3>
      <p className="text-gray-400 text-sm mb-3">{info.description}</p>
      <p className="text-purple-400 text-sm font-medium truncate">{info.value}</p>
    </motion.a>
  )
}

export default Contact
