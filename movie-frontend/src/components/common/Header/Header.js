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
        <Button>Button1</Button>
        <Button>Button2</Button>
        <Button>Button3</Button>
        <Button>Button4</Button>
      </div>
    </div>
  </div>
);

export default Header;