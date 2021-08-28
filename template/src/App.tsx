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
      <Box height="80vh">
        <Switch>
          <Route path="/theme-samples">
            <MuiSamples />
          </Route>
          <Route path="/">
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="center"
            >
              <T variant="h1">App</T>
              <code>src/App.tsx</code>
              <FauxLogo width="3em" height="3em" />
            </Box>
          </Route>
        </Switch>
      </Box>
      <Box height="1vh">
        <Divider />
      </Box>
      <Box height="19vh">
        <Footer />
      </Box>
    </Container>
  )
}

export default App
