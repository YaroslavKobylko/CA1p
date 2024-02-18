import React from 'react';
import BigPhoto from '../../../components/BigPhoto';
import styles from './BigPhotoModule.module.scss';

const BigPhotoModule = () => {
  return (
    <section className={styles.BigPage}>
      <div className={styles.blueBackground}></div>
      <BigPhoto />
    </section>
  );
}

export default BigPhotoModule;