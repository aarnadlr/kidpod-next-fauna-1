import Head from 'next/head'
import Home from '../components/Home/Home'

const Guestbook = (props) => {
  return (
    <>
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
        <Home/>
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
    </>
  )
}

export default Guestbook
