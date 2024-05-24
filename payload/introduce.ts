import { IIntroduce } from '../component/introduce/IIntroduce';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '안녕하세요! 성장하는 개발자 김세민입니다.',
    '사용자 인터페이스/경험에 관심이 많습니다.',
    '최신기술에 관심이 많고, 프로젝트에 적용해보며 내 것으로 만들려고 노력합니다.',
  ],
  sign: 'semin',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: '2024-05-24',
};

export default introduce;
