import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Typography as T } from '@material-ui/core'
import MuiSamples from './MuiSamples'
import FauxLogo from './FauxLogo'

function App() {
  return (
    <Container>
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        height={600}
        justifyContent="center"
      >
        <T variant="h1">App</T>
        <code>src/App.tsx</code>
        <FauxLogo width="3em" height="3em" />
      </Box>
      <MuiSamples />
    </Container>
  )
}

export default App
