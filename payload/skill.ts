import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C/C++',
      level: 3,
    },
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 2,
    },
    {
      title: 'Dart',
      level: 1,
    },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Vue.js',
      level: 3,
    },
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'Next.js',
      level: 2,
    },
    {
      title: 'Spring Boot',
      level: 2,
    },
    {
      title: 'Flutter',
      level: 1,
    },
  ],
};

const databases: ISkill.Skill = {
  category: 'Databases',
  items: [
    {
      title: 'MySQL',
    },
    {
      title: 'Firebase',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Git',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'IDEA',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Github',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'Notion',
    },
    {
      title: 'Baduk',
    },
    {
      title: 'Movies',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworks, databases, tools, misc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
