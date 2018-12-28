import * as React from 'react';

import styles from './Header.module.scss';

export interface IHeaderProps {
  title: string;
}

const Header = (props: IHeaderProps) => {
  return (
    <h1 className={styles.title}>{props.title}</h1>
  );
};

export default Header;
