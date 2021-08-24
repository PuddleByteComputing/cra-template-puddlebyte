import React from "react";
import { Box, Button, Chip, Container, Stack} from "@material-ui/core";
import { Typography as T } from "@material-ui/core";
import { Accordion, AccordionSummary, AccordionDetails } from "@material-ui/core";
import { ExpandMore } from '@material-ui/icons';

function App() {
  return (
    <Container>
      <Box textAlign="center">
        <T variant="h1">App goes here:</T>
        <T fontFamily="Roboto Mono">src/App.tsx</T>
      </Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <T fontFamily="Roboto Mono, monospace">src/theme.ts</T>&nbsp;- Typography samples:
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" alignItems="center" justifyContent="flex-start" spacing={0.5}>
            <T variant="h1">h1 heading</T>
            <T variant="h2">h2 heading</T>
            <T variant="h3">h3 heading</T>
            <T variant="h4">h4 heading</T>
            <T variant="h5">h5 heading</T>
            <T variant="h6">h6 heading</T>
            <T variant="subtitle1">subtitle1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</T>
            <T variant="subtitle2">subtitle2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.</T>
            <T variant="body1">body1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</T>
            <T variant="body2">body2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</T>
            <T variant="button">button text</T>
            <T variant="caption">caption text</T>
            <T variant="overline">overline</T>
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />}>
          <code>src/theme.ts</code>&nbsp;- palette samples:
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" alignItems="center" justifyContent="flex-start" spacing={0.5}>
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="info">Info</Button>
            <Button color="error">Error</Button>
            <Button color="warning">Warning</Button>
            <Button color="success">Success</Button>          
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Info" color="info" />
            <Chip label="Error" color="error" />
            <Chip label="Warning" color="warning" />
            <Chip label="Success" color="success" />
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}

export default App;
