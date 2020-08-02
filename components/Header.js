// import { headerBanner, headerTitle } from '../styles/header'

// export default function Header(props) {
//   return (
//     <>
//       <a href="https://fauna.com" target="_blank" rel="noopener noreferrer">
//         <img
//           className={headerBanner.className}
//           src="/static/fauna-logo-blue.png"
//           height="35px"
//           width="auto"
//         />
//       </a>
//       <h1 className={headerTitle.className}>Guestbook</h1>
//       {headerBanner.styles}
//       {headerTitle.styles}
//     </>
//   )
// }


  
import Link from 'next/link'
import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link href="/profile">
                  <a>Profile</a>
                </Link>
              </li>
              <li>
                <a href="/api/logout">Logout</a>
              </li>
            </>
          ) : (
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      <style jsx>{`
        nav {
          max-width: 42rem;
          margin: 0 auto;
          padding: 0.2rem 1.25rem;
        }
        ul {
          display: flex;
          list-style: none;
          margin-left: 0;
          padding-left: 0;
        }
        li {
          margin-right: 1rem;
        }
        li:first-child {
          margin-left: auto;
        }
        a {
          color: #fff;
          text-decoration: none;
        }
        header {
          color: #fff;
          background-color: #333;
        }
      `}</style>
    </header>
  )
}

export default Header