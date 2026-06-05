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
                操了老铁我又有重大发现🧐我的朋友他极有可能是一个M😱
                为什么这么说呢🤔因为他每天都发一些文案骚扰我😅直到我昨天和他说 你是傻福吧😡
                他说你有本事再骂一句😓我说 你是傻福吧😡他说他 爽了😋我操了老铁他说他爽了😨
                难道他之前打游戏是故意装糖让我骂的吗😰不是智斗你怎么用到这方面来了🥺我现在都不敢骂了😭
                生怕他给爽到😥我现在就要把我那个诡计多端的M朋友艾特出来😡
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                我c了老铁，这地球online能不能给我加一个血条的功能啊？
                我每天这样熬夜扣我的生命上限，但我自己又看不到，我真怕哪天直接给我扣没了。
                不过仔细一想，我熬夜减少的生命上限，是我老年的生命上限，而我现在熬夜享受的是我年轻的生命。
                我去！还有超前消费！那这么说，熬夜是一种慢死，但同样也是一种快活。不过真别熬夜了吧，
                对手机不太好。我发现睡前15分钟是手机最好玩的8个小时。每当我决定睡觉的时候，手机的大数
                据是一点都不藏私了，专挑我喜欢的视频推送。平时刷1个小时能刷到两三条我喜欢看的，但我要
                睡觉的时候就不一样了，每条视频都是我喜欢看的。这种视频放在眼睛里就是一种享受你们知道吗？
                所以我把这些视频都分享给了我的好朋友，让他一起床就能享受美味早餐。结果他也没有睡。
                我去不早说！怪不得我们两个能玩一块呢！咕咕嘎嘎！
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                卧槽了老铁，你真别怪我天天给你搬石，我其实是精卫来的，我把石存在你这里只是为了填海，
                等我什么时候存的石够把海填平了，我就不给你分享了，所以说好好珍惜我给你搬石的时光吧，
                以后就看不到了，你问我什么时候存的石够把海填平，开玩笑，我上辈子是神鸟都没做到，这辈
                子我只是神人，我怎么可能做到嘛，你就等着被我搬一辈子石吧，哦对了，最近换季，注意保暖，
                不要感冒了，我不希望你因为感冒而耽误了看我搬的石，毕竟好朋友只有我才可以骚扰你，感冒都
                不行。咕咕嘎嘎！
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
