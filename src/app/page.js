import styles from './page.module.css'
import { MyButtonSendHit } from '@/components/MyButtonSendHit';
import { MyFlagComponent } from '@/components/MyFlagComponent'
import Nav from '@/components/Nav';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Next ServerSide Rendering Integration With Flagship [SSR]</h1>
      <Nav/>
      <p>flag key: my_flag_key</p>
      <MyFlagComponent />
      <MyButtonSendHit />
    </>
  );
}
