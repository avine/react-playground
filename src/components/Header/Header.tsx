import React, { Fragment } from 'react';

import styles from './Header.module.scss';

export interface IHeaderProps {
  title: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <Fragment>
      <h1 className={styles.title}>{props.title}</h1>
      <p>Yeah!</p>
    </Fragment>
  );
};

export default Header;
