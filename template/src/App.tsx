import React from 'react'
import { Box, Container } from '@material-ui/core'
import { Typography as T } from '@material-ui/core'
import MuiSamples from './MuiSamples'

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
      </Box>
      <MuiSamples />
    </Container>
  )
}

export default App
