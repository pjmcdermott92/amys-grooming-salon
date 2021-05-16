import Head from 'next/head';
import Homepage from '../src/components/pages/Homepage/Homepage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amy's Grooming Salon</title>
        <meta name="description" content="Keep your pets looking - and feeling - fresh!" />
      </Head>
      <Homepage />
    </div>
  )
}
