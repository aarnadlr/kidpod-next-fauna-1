import Head from 'next/head';
import Home from '../components/Home/Home';
import { useUser } from '../lib/hooks';
import Layout from '../components/Layout';

const Index = (props) => {
  const user = useUser();

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/favicon.png"
        />
      </Head>

      <div>
        <Home />

        <p>Above logged in content</p>
        {user && (
          <>
            <p>Currently logged in as:</p>
            <pre>{JSON.stringify(user, null, 2)}</pre>
          </>
        )}
        <p>Below logged in content</p>
      </div>

      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <style jsx>{`
        div {
          display: flex;
          margin-left: auto;
          margin-right: auto;
          font-family: sans-serif, sans;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </Layout>
  );
};

export default Index;
