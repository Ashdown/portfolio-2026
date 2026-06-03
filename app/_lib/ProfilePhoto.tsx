import styles from './ProfilePhoto.module.css';

export default function ProfilePhoto({ src, size = 256 }: { src: string; size?: number }) {
  return (
    <img
      src={src}
      width={size}
      height={size}
      className={styles.profilePhoto}
    />
  );
}
