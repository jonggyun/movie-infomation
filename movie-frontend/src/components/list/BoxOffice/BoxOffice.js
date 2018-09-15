import React from 'react';
import styles from './BoxOffice.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const BoxOffice = () => (
  <div className={cx('box-office')}>
    BoxOffice
  </div>
);

export default BoxOffice;