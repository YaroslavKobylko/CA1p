import React from 'react';
import BigPhoto from '../../../components/BigPhoto';
import styles from './BigPhotoPage.module.scss';

const BigPhotoPage = () => {
  return (
    <section className={styles.BigPage}>
      <div className={styles.blueBackground}></div>
      <BigPhoto />
    </section>
  );
}

export default BigPhotoPage;