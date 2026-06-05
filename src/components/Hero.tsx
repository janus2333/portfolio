import { motion } from 'framer-motion'

/**
 * Hero组件 - 首页英雄区域
 * 包含大标题、简介和头像
 */
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 背景渐变效果 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* 左侧：文字内容 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          {/* 大标题 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Hi, I'm
            </span>
            <br />
            <span className="text-white">WC了老铁</span> //姓名
          </h1>

          {/* 简介 */}
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            槽了老铁～我刚认识你那会，真是你这辈子的演技巅峰啊，那时候我真以为你很高冷来着，
            坐在一群人里是最安静的，然后我还问你是哪里人，你还彬彬有礼的回答我，你哪里是人啊朋友，
            你能不能恢复一下，恢复到我们刚认识那会儿，你的意思是说以后你都是这副傻不拉几的样子了嘛，
            这也…这也…这太爽了吧！那这就对上了，其实我也傻不拉几的，这样我们的病情就非常一致了，
            怪不得你当时装的这么像，我还是在一堆人里锁定了你，你要再多装两天我就被你骗过去了
          </p>

          {/* CTA按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* 右侧：头像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative">
            {/* 渐变光晕效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            
            {/* 头像容器 */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl">
              <img
                src="https://via.placeholder.com/400x400/6B46C1/FFFFFF?text=Avatar"
                alt="Profile Avatar"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* 装饰性元素 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-500 to-red-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-500/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-purple-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
