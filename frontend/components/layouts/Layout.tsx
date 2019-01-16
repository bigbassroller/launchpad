import * as React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import "../../styles/style.scss"
import Nav from '../Nav';

type Props = {
  title?: string
}

const Layout: React.SFC<Props> = ({props, children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    {children}
    <footer>
      I'm here to stay
    </footer>
  </div>
)

export default Layout