import React from 'react';
import styles from './Header.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Header = () => (
  <div className={cx('header')}>
    <div className={cx('header-content')}>
      <div className={cx('title')}>
        Movie Info.
      </div>
      <div className={cx('subMenu')}>
      </div>
    </div>
  </div>
);

export default Header;