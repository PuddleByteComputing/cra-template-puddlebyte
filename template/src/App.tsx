import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Box, Container, Divider } from '@material-ui/core'
import { Typography as T } from '@material-ui/core'
import FauxLogo from './FauxLogo'
import Footer from './Footer'
import MuiSamples from './MuiSamples'

function App() {
  return (
    <Container>
      <Box display="flex" minHeight="100vh" flexDirection="column">
        <Box flexGrow={1} display="flex">
          <Switch>
            <Route path="/theme-samples">
              <MuiSamples />
            </Route>
            <Route path="/">
              <Box
                alignItems="center"
                display="flex"
                flexDirection="column"
                flexGrow={1}
                justifyContent="center"
              >
                <T variant="h1">App</T>
                <code>src/App.tsx</code>
                <FauxLogo width="3em" height="3em" />
              </Box>
            </Route>
          </Switch>
        </Box>
        <Divider flexItem sx={{ mb: '1em' }} />
        <Box>
          <Footer />
        </Box>
      </Box>
    </Container>
  )
}

export default App
