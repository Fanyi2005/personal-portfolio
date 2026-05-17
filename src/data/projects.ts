export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  image: string
  link?: string
  github?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'RAG 知识库问答系统',
    description:
      '基于 LangChain + RAG 构建的私有知识库问答系统，支持 PDF 文档解析、向量存储和流式对话，可针对特定领域知识进行精准回答',
    techStack: ['LangChain', 'RAG', 'Python', 'NLP', 'ChromaDB'],
    image: '',
    github: 'https://github.com',
  },
  {
    id: '2',
    title: '电商用户行为分析',
    description:
      '对百万级电商用户行为数据进行清洗、探索性分析与可视化，构建 RFM 模型完成用户分层，输出数据报告与策略建议',
    techStack: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Python'],
    image: '',
    github: 'https://github.com',
  },
  {
    id: '3',
    title: '文本情感分类系统',
    description:
      '基于传统机器学习与深度学习模型的中文文本情感分析系统，涵盖数据预处理、特征工程、模型训练对比到 Web 部署的完整流程',
    techStack: ['NLP', 'Python', '机器学习', '深度学习', 'Scikit-learn'],
    image: '',
    github: 'https://github.com',
  },
  {
    id: '4',
    title: '智能环境监测系统',
    description:
      '基于 STM32 的物联网环境监测设备，实时采集温湿度、PM2.5 等数据，通过串口上传至 Linux 服务器，支持 MySQL 存储与 Python 数据可视化',
    techStack: ['STM32', 'C/C++', 'Python', 'Linux', 'MySQL'],
    image: '',
    github: 'https://github.com',
  },
  {
    id: '5',
    title: '大模型微调实验平台',
    description:
      '基于 QLoRA 技术对开源大模型进行指令微调，支持数据集管理、训练参数配置、损失曲线可视化和模型推理对比，降低微调门槛',
    techStack: ['深度学习', 'Python', 'PyTorch', 'LangChain', 'Transformers'],
    image: '',
    github: 'https://github.com',
  },
  {
    id: '6',
    title: 'Linux 服务器监控工具',
    description:
      '轻量级 Linux 服务器资源监控工具，实时采集 CPU、内存、磁盘和网络数据，支持阈值告警、历史趋势图和日志持久化存储',
    techStack: ['Linux', 'Python', 'MySQL', 'Git', 'Shell'],
    image: '',
    github: 'https://github.com',
  },
]
