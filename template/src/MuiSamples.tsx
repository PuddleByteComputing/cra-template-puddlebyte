import React from "react";
import { Box, Button, Chip, Divider, Stack} from "@material-ui/core";
import { Typography as T } from "@material-ui/core";

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'

const lorWords = lorem.split(' ')

function ThemeTypographySamples() {
  const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
  const subtitles = ['subtitle1', 'subtitle2'] as const
  const bodies = ['body1', 'body2'] as const
  return (
    <Stack direction="column" divider={<Divider />} alignItems="flex-start" justifyContent="flex-start" spacing={0.5}>
      {headers.map((variant, i) =>
        <T variant={variant} key={`t-${variant}`}>{variant}: {lorWords.slice(3*i, 3*(i+1)).join(' ')}</T>)}
      {subtitles.map((variant, i) =>
        <T variant={variant}>{variant}: {lorWords.slice(8*i, 8*(i+1)).join(' ')}</T>)}
      {bodies.map(variant => <T variant={variant}>{variant}: {lorem}</T>)}
      <Button>button typography</Button>
      <Box>
        <Box sx={{width: 400, height: 300, bgcolor: 'secondary.dark'}} />
        <T variant="caption">caption: {lorWords.slice(0, 8).join(' ')}</T>
      </Box>
      <Box>
        <T variant="overline">overline: {lorWords.slice(0, 3).join(' ')}</T>
        <T variant="h1">{lorWords.slice(3, 11).map(word => word.replaceAll(/[,.]/g, '')).join(' ')}</T>
      </Box>
    </Stack>
  );
}

function ThemeColorSamples() {
  const colors = ['primary', 'secondary', 'info', 'error', 'warning', 'success'] as const
  return (
    <Stack direction="column" alignItems="center" justifyContent="flex-start" spacing={0.5}>
      {colors.map(color => <Button color={color} key={`button-${color}`}>{color}</Button>)}
      {colors.map(color => <Chip color={color} key={`chip-${color}`} label={color} />)}
    </Stack>
  );
}

function MuiSamples() {
  return (
    <Stack alignItems="center" divider={<Divider />} spacing={1}>
      <T variant="h4">MUI Theme Samples (<code>src/theme.ts</code>)</T>
      <Stack alignItems="stretch" direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
        <Stack divider={<Divider />}>
          <T variant="h5" color="secondary">Typography samples</T>
          <ThemeTypographySamples />
        </Stack>
        <Stack divider={<Divider />}>
          <T variant="h5" color="secondary">Color&nbsp;samples</T>
          <ThemeColorSamples />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default MuiSamples;
