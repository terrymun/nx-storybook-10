import styles from './my-component-library.module.css';

export function MyComponentLibrary() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to MyComponentLibrary!</h1>
    </div>
  );
}

export default MyComponentLibrary;
