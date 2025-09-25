export type CourseCard = {
  title: string;
  desc?: string;
  points: string[];
  cta: { label: string; href: string } | null;
  videoKey?: string; // key to open a video in the modal
  icon?: string; // lucide icon name
  color?: string; // background color token
};

export const courseCards: CourseCard[] = [
  {
    title: '阅读课',
    desc: '启发式教学，开放式提问，让孩子能更好理解单词和文章大意',
    points: ['精选原版教材', '情景对话练习', '发音纠正指导'],
    cta: { label: '观看完整教学视频', href: '#' },
    videoKey: 'reading',
    icon: 'BookOpen',
    color: '#dff1ff',
  },
  {
    title: '写作课',
    desc: '系统化写作技能训练',
    points: ['写作技巧指导', '范文分析', '个性化批改'],
    cta: { label: '观看完整教学视频', href: '#' },
    videoKey: 'writing',
    icon: 'PenLine',
    color: '#e5fbef',
  },
  {
    title: '语法课',
    desc: '在情景中理解语法，在任务中记忆规则',
    points: ['语法规律总结', '实际运用练习', '错题分析讲解'],
    cta: { label: '观看完整教学视频', href: '#' },
    videoKey: 'grammar',
    icon: 'MessageCircle',
    color: '#fff2e6',
  },
];

export const reviewsImages: string[] = ['/images/review1.png', '/images/review2.png'];

export const perks = [
  { title: '每周一次 90分钟线上课', desc: '选用原版教材Power Up', icon: 'Clock3', color: '#e9f1ff' },
  { title: '课前预习视频', desc: '课后作业批改', icon: 'Video', color: '#e9fff3' },
  { title: '绘本阅读补充', desc: '每日打卡练习', icon: 'BookMarked', color: '#fff0e9' },
];

export const contactLinks = [
  { label: '添加老师微信', href: '#' },
  { label: '预约试听', href: '#' },
];

// Video registry: replace values with your uploaded file paths or URLs.
export const videos: Record<string, { src: string; poster?: string }> = {
  reading: { src: '/videos/1.mp4', poster: '/images/h2.png' },
  writing: { src: '/videos/2.mp4', poster: '/images/h3.png' },
  grammar: { src: '/videos/3.mp4', poster: '/images/h2.png' },
  speaking: { src: '/videos/4.mp4', poster: '/images/h3.png' },
};

// Images for sections (using your uploaded assets)
export const profileImage = '/images/profile.jpg';

export const galleryImages: string[] = ['/images/hw1.png', '/images/h2.png', '/images/h3.png'];

export const homeworkImages: string[] = Array(6).fill('');


