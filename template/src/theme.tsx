import React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { createTheme } from '@material-ui/core/styles'
import { amber, cyan, deepPurple } from '@material-ui/core/colors'
import { lightGreen, pink, teal } from '@material-ui/core/colors'

// Delegate Material UI <Link /> to React Router <Link />
// See: https://next.material-ui.com/guides/routing/#global-theme-link
type LinkShimProps = Omit<RouterLinkProps, 'to'> & {
  href: RouterLinkProps['to']
}

const LinkShim = React.forwardRef<HTMLAnchorElement, LinkShimProps>(
  (props, ref) => {
    const { href, ...other } = props

    return (
      <RouterLink data-testid="custom-link" ref={ref} to={href} {...other} />
    )
  }
)

const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `code, kbd, listing, plaintext, pre, samp, tt, xmp {font-family: Roboto Mono, monospace;}`,
    },
    MuiLink: {
      defaultProps: {
        // @ts-ignore
        component: LinkShim,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkShim,
      },
    },
  },
  palette: {
    primary: teal,
    secondary: { main: deepPurple['700'] },
    error: { main: pink.A700 },
    warning: amber,
    info: cyan,
    success: lightGreen,
  },
  typography: {
    h1: {
      fontSize: '2.4rem',
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.8rem',
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 700,
      letterSpacing: '0.015em',
    },
    h3: {
      fontSize: '1.6rem',
      fontFamily: 'Cormorant Garamond, serif',
      fontWeight: 700,
      letterSpacing: '0.03em',
    },
    h4: { fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.03em' },
    h5: { fontSize: '1.3rem', fontWeight: 300, letterSpacing: '0.06em' },
    h6: { fontSize: '1.1rem', fontWeight: 300, letterSpacing: '0.12em' },
    overline: { fontWeight: 500 },
    caption: { fontStyle: 'italic' },
  },
})

export default theme
