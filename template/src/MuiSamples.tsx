import React from 'react'
import { Box, Button, Chip, Divider, Stack } from '@material-ui/core'
import { Typography as T } from '@material-ui/core'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.'

const lorWords = lorem.split(' ')

function ThemeTypographySamples() {
  const headers = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] as const
  const subtitles = ['subtitle1', 'subtitle2'] as const
  const bodies = ['body1', 'body2'] as const
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={1}
    >
      {headers.map((variant, i) => (
        <T variant={variant} key={`t-${variant}`}>
          {variant}:{' '}
          {lorWords
            .slice(3 * i, 3 * (i + 1))
            .map(s => s.replace(/^./, w => w.toUpperCase()))
            .join(' ')}
        </T>
      ))}
      {subtitles.map((variant, i) => (
        <T key={`t-${variant}`} variant={variant}>
          {variant}: {lorWords.slice(8 * i, 8 * (i + 1)).join(' ')}
        </T>
      ))}
      {bodies.map(variant => (
        <T key={`t-${variant}`} variant={variant}>
          {variant}: {lorem}
        </T>
      ))}
      <Box border={1} borderColor="grey.300" width="100%" p={1}>
        <T variant="overline">overline: {lorWords.slice(0, 3).join(' ')}</T>
        <T variant="h1">
          {lorWords
            .slice(3, 9)
            .map(word =>
              word.replaceAll(/[,.]/g, '').replace(/^./, s => s.toUpperCase())
            )
            .join(' ')}
        </T>
      </Box>
      <Box border={1} borderColor="grey.300" p={1}>
        <Box width="100%" height={150} bgcolor="secondary.dark" />
        <T variant="caption">caption: {lorWords.slice(0, 8).join(' ')}</T>
      </Box>
      <Button variant="outlined">Button</Button>
    </Stack>
  )
}

function ThemeColorSamples() {
  const colors = [
    'primary',
    'secondary',
    'info',
    'error',
    'warning',
    'success',
  ] as const
  return (
    <Stack direction="column" spacing={0.5}>
      {colors.map(color => (
        <Button color={color} key={`button-${color}`} variant="outlined">
          {color}
        </Button>
      ))}
      {colors.map(color => (
        <Chip
          color={color}
          key={`chip-${color}`}
          label={color.replace(/^./, s => s.toUpperCase())}
        />
      ))}
    </Stack>
  )
}

function MuiSamples() {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mb="1em"
        mt="0.5em"
        flexDirection="column"
        width="100%"
      >
        <T variant="h4">MUI Theme Samples</T>
        <code>src/theme.ts</code>
      </Box>
      <Box
        display="flex"
        sx={{ flexDirection: { xs: 'column', sm: 'row' } }}
        justifyContent="space-between"
      >
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb="1em"
          >
            <T variant="h5" color="secondary" mb="0.25em">
              Typography
            </T>
            <Divider flexItem />
          </Box>
          <ThemeTypographySamples />
        </Box>
        <Box>&nbsp;&nbsp;&nbsp;</Box>
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mb="1em"
          >
            <T variant="h5" color="secondary" mb="0.25em">
              Color
            </T>
            <Divider flexItem />
          </Box>
          <ThemeColorSamples />
        </Box>
      </Box>
    </Box>
  )
}

export default MuiSamples
