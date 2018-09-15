import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('title')}>
        Movie Info.
      </div>
      <div className={cx('sub-menu')}>
        <Button>박스오피스</Button>
        <Button>영화정보</Button>
        <Button>영화사정보</Button>
        <Button>영화인정보</Button>
      </div>
    </div>
  </div>
);

export default Header;