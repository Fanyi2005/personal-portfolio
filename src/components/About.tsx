import { motion } from 'framer-motion'
import { skills } from '../data/skills'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const categories = ['编程语言', '数据科学', 'AI & 大模型', '工具 & 基础设施'] as const

const About = () => {
  return (
    <section id="about" className="px-6 py-24 max-w-6xl mx-auto">
      {/* 标题 */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          关于我
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            个人简介
          </span>
        </h2>
      </motion.div>

      {/* 内容区 */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* 左侧 — 个人介绍 */}
        <motion.div
          className="flex-1 space-y-4"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="rounded-2xl border border-gray-800 bg-[#111118] p-8">
            <p className="text-gray-300 leading-relaxed">
              我是一名大数据专业的大学生，目前专注于大模型与 AI
              技术的学习和实践。从数据处理、特征工程到模型训练与应用部署，我逐步构建起全链路的技术理解。
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              我的技术栈涵盖 Python 数据科学生态（NumPy、Pandas、Matplotlib）、机器学习与深度学习、NLP
              以及 LangChain、RAG 等大模型应用框架。同时具备 C/C++ 基础、Linux 操作和 MySQL 数据库管理能力。
            </p>
          </div>
        </motion.div>

        {/* 右侧 — 技能列表 */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="rounded-2xl border border-gray-800 bg-[#111118] p-8">
            <h3 className="text-lg font-semibold text-white mb-6">
              技术栈
            </h3>
            {categories.map((category) => (
              <div key={category} className="mb-5 last:mb-0">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                  {category}
                </p>
                <motion.div
                  className="flex flex-wrap gap-2"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill) => (
                      <motion.span
                        key={skill.name}
                        variants={itemVariants}
                        className="rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 px-3 py-1.5 text-sm text-gray-300 transition-colors hover:border-purple-500/40 hover:text-white"
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
