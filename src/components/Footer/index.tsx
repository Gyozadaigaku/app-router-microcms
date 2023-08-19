import styles from "./index.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        Copyright© 最強の借金返済術.com, {currentYear} All&ensp;Rights Reserved.
      </p>
      <div className={styles.spacer} />
      <a
        href="https://xn--t8jud6b471q6jrwyg00pk0ftuo4i2cevlryf.com/wp/about/?medid=yahoo_cpc&amp;clientid=&amp;default="
        target="_blank"
      >
        特商法の表記
      </a>
      ｜
      <a
        href="https://xn--t8jud6b471q6jrwyg00pk0ftuo4i2cevlryf.com/wp/about/?medid=yahoo_cpc&amp;clientid=&amp;default="
        target="_blank"
      >
        運営者情報
      </a>
      ｜
      <a
        href="https://xn--t8jud6b471q6jrwyg00pk0ftuo4i2cevlryf.com/wp/about/?medid=yahoo_cpc&amp;clientid=&amp;default=#privacy_policy"
        target="_blank"
      >
        プライバシーポリシー
      </a>
    </footer>
  );
}
