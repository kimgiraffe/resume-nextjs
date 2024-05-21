import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'HABITZ',
      startedAt: '2024-04',
      endedAt: '2024-05',
      where: '삼성청년SW아카데미',
      descriptions: [
        {
          content: 'FE',
        },
        {
          content: '결제 페이지 구현',
        },
        {
          content: '아이 메인 페이지 구현',
        },
        {
          content: '미션 수행 페이지 구현',
        },
        {
          content: '포인트 내역 페이지 구현',
        },
        {
          content: '퀴즈 페이지 구현',
        },
        {
          content: '구매 내역 페이지 구현',
        },
      ],
    },
    {
      title: 'LYRIC:IT',
      startedAt: '2024-02',
      endedAt: '2024-04',
      where: '삼성청년SW아카데미',
      descriptions: [
        {
          content: 'FE',
        },
        {
          content: '화면 디자인 설계',
        },
        {
          content: '로비 페이지 컴포넌트 개발 및 스토리북 작성',
        },
        {
          content: '대기 방 컴포넌트 개발 및 스토리북 작성',
        },
        {
          content: ' 게임 페이지 컴포넌트 개발 및 스토리북 작성',
        },
        {
          content: '사전 페이지 컴포넌트 개발 및 스토리북 작성',
        },
      ],
    },
    {
      title: '금쪽이 해방일지',
      startedAt: '2024-01',
      endedAt: '2024-02',
      where: '삼성청년SW아카데미',
      descriptions: [
        {
          content: 'FE 리드',
        },
        {
          content: '다이어리 관련 화면 설계 및 개발',
        },
        {
          content: 'Pinia를 이용한 상태 관리',
        },
        {
          content: 'Axios를 이용한 REST API 연동',
        },
        {
          content: 'Vue-router를 이용한 Navigation Guard 적용',
        },
      ],
    },
    {
      title: 'MedVision',
      startedAt: '2023-03',
      endedAt: '2023-06',
      where: '서강대학교',
      descriptions: [
        {
          content: '회원가입, 로그인, 메인페이지 화면 설계 및 개발',
        },
        {
          content: '알약 조회 화면 설계 및 개발',
        },
        {
          content: '복용 일정 관리 화면 설계 및 개발',
        },
      ],
    },
    {
      title: 'Knot',
      startedAt: '2022-09',
      endedAt: '2023-12',
      where: '서강대학교',
      descriptions: [
        {
          content: 'Firebase를 이용한 데이터 실시간 동기화',
        },
        {
          content: '메인 화면 설계 및 개발',
        },
      ],
    },
  ],
};

export default project;
