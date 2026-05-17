import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* 背景装饰 — 渐变光晕 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-400/20 blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] rounded-full bg-gradient-to-r from-cyan-400/15 to-purple-600/15 blur-[80px]" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 max-w-5xl w-full">
        {/* 文字区域 */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            大数据专业学生 / Big Data &amp; AI Learner
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              你好，我是
              <br />
              樊懿
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            一名大数据专业的大学生，正在深入学习大模型与 AI
            技术，探索从数据处理到智能应用的全链路实践。
          </motion.p>

          {/* CTA 按钮 */}
          <motion.div
            className="mt-8 flex gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-6 py-3 text-sm font-medium text-white transition-all hover:from-purple-600 hover:to-cyan-600 hover:scale-105"
            >
              查看作品
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm font-medium text-gray-300 transition-all hover:border-gray-500 hover:text-white"
            >
              联系我
            </a>
          </motion.div>
        </motion.div>

        {/* 头像区域 */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            {/* 渐变边框 */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-cyan-400 to-purple-500 p-[3px]">
              <div className="w-full h-full rounded-full bg-[#1a1a2e] flex items-center justify-center overflow-hidden">
                <img
                  src="/avatar.jpg"
                  alt="樊懿的头像"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            {/* 装饰圆点 */}
            <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500" />
            <div className="absolute -top-2 -left-2 w-4 h-4 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
          </div>
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero
