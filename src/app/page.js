import { MyButtonSendHit } from '@/components/MyButtonSendHit';
import { MyFlagComponent } from '@/components/MyFlagComponent'

export default function Home() {
  return (
    <>
      <h1>Example of Flagship implementation in Next.js 13</h1>
      <p>flag key: my_flag_key</p>
      <MyFlagComponent />
      <MyButtonSendHit />
    </>
  );
}
