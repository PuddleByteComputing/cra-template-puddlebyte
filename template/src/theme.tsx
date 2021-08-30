import React from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { createTheme } from '@material-ui/core/styles'
import { amber, cyan, deepPurple } from '@material-ui/core/colors'
import { lightGreen, pink, teal } from '@material-ui/core/colors'

const defaultTheme = createTheme({})

console.log(defaultTheme)

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
    MuiTypography: {
      defaultProps: {
        variantMapping: { caption: 'div' },
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
      fontSize: '2rem',
      fontFamily: 'Newsreader, serif',
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.6rem',
      fontFamily: 'Newsreader, serif',
      fontWeight: 400,
    },
    h3: {
      fontSize: '1.4rem',
      fontFamily: 'Newsreader, serif',
      fontWeight: 300,
    },
    h4: { fontSize: '1.5rem', fontWeight: 500 },
    h5: { fontSize: '1.3rem', fontWeight: 400 },
    h6: { fontSize: '1.1rem', fontWeight: 300 },
    overline: { fontWeight: 500 },
    caption: { fontStyle: 'italic' },
  },
})

export default theme
