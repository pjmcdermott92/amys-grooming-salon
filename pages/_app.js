import Layout from '../src/components/Layout/Layout';
import '../src/styles/root.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
