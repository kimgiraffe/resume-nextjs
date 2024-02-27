import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김세민',
    small: '(kimgiraffe)',
  },
  contact: [
    {
      title: 'kimgiraffe@naver.com',
      link: 'mailto:kimgiraffe@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/kimgiraffe',
      icon: faGithub,
    },
  ],
  notice: {
    title: '휴대전화가 아닌 이메일로 연락 부탁드립니다.',
    icon: faBell,
  },
};

export default profile;
