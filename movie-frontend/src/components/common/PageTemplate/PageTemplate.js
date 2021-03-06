import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import MainPage from 'components/main/MainPage';

const cx = classNames.bind(styles);

const PageTemplate = () => (
  <div className={cx('page-template')}>
    <Header />
    <MainPage />
    <Footer />
  </div>
);

export default PageTemplate;