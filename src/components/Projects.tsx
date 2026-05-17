import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { projects } from '../data/projects'

// 为每张卡片生成不同色调的渐变占位图
const gradients = [
  'from-purple-600 to-cyan-500',
  'from-cyan-500 to-emerald-500',
  'from-pink-500 to-purple-600',
  'from-amber-500 to-pink-500',
  'from-emerald-500 to-cyan-500',
  'from-purple-500 to-pink-500',
]

const iconMap: Record<string, string> = {
  'RAG 知识库问答系统':
    'M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2zm0 4h5v2H8v-2zM21 3l-4 4-1-1-3 3 1 1 3-3 1 1 4-4-1-1z',
  '电商用户行为分析':
    'M3 3h18v4H3V3zm0 7h18v4H3v-4zm0 7h18v4H3v-4zM5 7v2h4V7H5zm0 7v2h8v-2H5zm12-7v2h2V7h-2zm0 7v2h2v-2h-2z',
  '文本情感分类系统':
    'M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z',
  '智能环境监测系统':
    'M12 2a6 6 0 00-6 6v2H4a2 2 0 00-2 2v4a2 2 0 002 2h2v2a6 6 0 0012 0v-2h2a2 2 0 002-2v-4a2 2 0 00-2-2h-2V8a6 6 0 00-6-6zm-4 6a4 4 0 018 0v2H8V8zm-4 4h16v4H4v-4zm6 6a2 2 0 104 0h-4z',
  '大模型微调实验平台':
    'M12 2a3 3 0 00-3 3c0 1.3.84 2.4 2 2.82V10H8l-4 4 1.4 1.4L8 12.8V20h2v-7.2l2.6 2.6L14 14l-4-4V7.82A2.99 2.99 0 0012 2zm0 2a1 1 0 110 2 1 1 0 010-2zm7 6l-3 3v2h-2v2h2v-2l3-3-1.4-1.4L19 10z',
  'Linux 服务器监控工具':
    'M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v12h16V6H4zm3 2h2v6H7V8zm4 0h2v4h-2V8zm4 0h2v6h-2V8z',
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const gradient = gradients[index % gradients.length]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-2xl border border-gray-800 bg-[#111118] overflow-hidden transition-all duration-300 hover:border-gray-600 hover:-translate-y-1"
    >
      {/* 截图占位 */}
      <div
        className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}
      >
        <svg
          className="w-16 h-16 text-white/30"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d={iconMap[project.title] || iconMap['电商平台']} />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-[#111118] via-transparent to-transparent" />
      </div>

      {/* 内容 */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-gray-800/80 px-3 py-1 text-xs text-gray-300 border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* 链接 */}
        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              在线演示
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-200 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              源代码
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-24 max-w-6xl mx-auto">
      {/* 标题 */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">
          精选项目
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            我的作品
          </span>
        </h2>
      </motion.div>

      {/* 项目卡片网格 */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects
