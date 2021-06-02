import { Fragment } from "react";
import MainNavigation from "./MainNavigation";

import styles from "./Layout.module.css";
import { props } from "bluebird";

const Layout = (props) => {
  return (
    <Fragment>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
