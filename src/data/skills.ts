export interface Skill {
  name: string
  category: '编程语言' | '数据科学' | 'AI & 大模型' | '工具 & 基础设施'
}

export const skills: Skill[] = [
  // 编程语言
  { name: 'C/C++', category: '编程语言' },
  { name: 'Python', category: '编程语言' },

  // 数据科学
  { name: 'NumPy', category: '数据科学' },
  { name: 'Pandas', category: '数据科学' },
  { name: 'Matplotlib', category: '数据科学' },
  { name: 'Seaborn', category: '数据科学' },

  // AI & 大模型
  { name: '机器学习', category: 'AI & 大模型' },
  { name: '深度学习', category: 'AI & 大模型' },
  { name: 'NLP', category: 'AI & 大模型' },
  { name: 'LangChain', category: 'AI & 大模型' },
  { name: 'RAG', category: 'AI & 大模型' },

  // 工具 & 基础设施
  { name: 'Linux', category: '工具 & 基础设施' },
  { name: 'MySQL', category: '工具 & 基础设施' },
  { name: 'Git', category: '工具 & 基础设施' },
  { name: 'STM32', category: '工具 & 基础设施' },
]
