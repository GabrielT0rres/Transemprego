import styles from './style.module.css'

const CardLoading = () => {
    return (
      <div className={`${styles.card} ${styles['card-loading']}`}>
        <div className={`${styles['loading-placeholder']} ${styles.h6} ${styles['loading-placeholder-narrow']}`}></div>
        <div className={`${styles['loading-placeholder']} ${styles.h3} ${styles['loading-placeholder-wide']}`}></div>
        <div className={`${styles['loading-placeholder']} ${styles.h1} ${styles['loading-placeholder-extra-wide']}`}></div>
        <div className={`${styles['loading-placeholder']} ${styles.a} ${styles['loading-placeholder-narrow']}`}></div>
      </div>
    );
  };
  
  export default CardLoading;