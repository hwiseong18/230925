import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/board/list">Board</Link>
        </nav>
        {children}
      </body>
    </html>
  )
}
