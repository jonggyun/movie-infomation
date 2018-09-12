import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';

const cx = classNames.bind(styles);

const PageTemplate = () => (
  <div classNames={cx('page-template')}>
    <Header />
  </div>
);

export default PageTemplate;