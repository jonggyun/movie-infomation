import React from 'react';
import styles from './MainPage.scss';
import classNames from 'classnames/bind';
import BoxOffice from 'components/list/BoxOffice';

const cx = classNames.bind(styles);

const MainPage = () => (
  // 메인페이지에서 컴포넌트를 바꾸는 형식으로 개발하자!
  <div className={cx('main-page')}>
    <div className={cx('content')}>
      <BoxOffice />
    </div>
  </div>
);

export default MainPage;