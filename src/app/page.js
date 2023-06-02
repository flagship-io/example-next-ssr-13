import styles from './page.module.css'
import { MyButtonSendHit } from '@/components/MyButtonSendHit';
import { MyFlagComponent } from '@/components/MyFlagComponent'
import Link from 'next/link';

export default function Home() {

  console.log("Home");
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Next ServerSide Rendering Integration With Flagship [SSR]</h1>
        <p><Link href="about" >about</Link></p>
        <p>flag key: my_flag_key</p>
        <MyFlagComponent />
        <MyButtonSendHit />
      </main>
    </div>
  );
}
