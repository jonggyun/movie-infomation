// import React from 'react';
// import styles from './BoxOffice.scss';
// import classNames from 'classnames/bind';

// const cx = classNames.bind(styles);

// const BoxOffice = () => (
//   <div className={cx('box-office')}>
//     BoxOffice
//   </div>
// );

// export default BoxOffice;

import React, { Component } from 'react';
import * as api from 'lib/api';

class BoxOffice extends Component {

  initialize = async () => {
    try {
      const params = {
        repNationCd: 'K', 
        wideAreaCd: '0105000000'
      }
      const test = await api.dailyList(params);
      console.log(test);
    } catch (error) {
      console.log('error', error);
    }    
  }

  componentDidMount() {
    this.initialize();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        BOXOFFICE
      </div>
    );
  }
}

export default BoxOffice;