import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '삼성청년SW 아카데미',
      subTitle: 'Java 전공',
      startedAt: '2023-07',
    },
    {
      title: '서강대학교',
      subTitle: '컴퓨터공학',
      startedAt: '2017-03',
      endedAt: '2023-08',
    },
    {
      title: '휘문고등학교',
      subTitle: '서울특별시 강남구',
      startedAt: '2014-03',
      endedAt: '2017-02',
    },
  ],
};

export default education;
