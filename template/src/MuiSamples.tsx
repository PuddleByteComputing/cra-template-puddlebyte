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
      divider={<Divider />}
      alignItems="flex-start"
      justifyContent="flex-start"
      spacing={0.5}
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
        <T variant={variant}>
          {variant}: {lorWords.slice(8 * i, 8 * (i + 1)).join(' ')}
        </T>
      ))}
      {bodies.map(variant => (
        <T variant={variant}>
          {variant}: {lorem}
        </T>
      ))}
      <Box>
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
      <Button>button typography</Button>
      <Box>
        <Box sx={{ width: 400, height: 150, bgcolor: 'secondary.dark' }} />
        <T variant="caption">caption: {lorWords.slice(0, 8).join(' ')}</T>
      </Box>
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
        <Button color={color} key={`button-${color}`}>
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
    <Stack alignItems="center" spacing={1}>
      <T variant="h4">
        MUI Theme Samples - <code>src/theme.ts</code>
      </T>
      <Stack alignItems="stretch" direction="row" spacing={2}>
        <Stack divider={<Divider flexItem />} spacing={1.5}>
          <T variant="h5" color="secondary">
            Typography
          </T>
          <ThemeTypographySamples />
        </Stack>
        <Stack divider={<Divider flexItem />} alignItems="center" spacing={2}>
          <T variant="h5" color="secondary">
            Color
          </T>
          <ThemeColorSamples />
        </Stack>
      </Stack>
    </Stack>
  )
}

export default MuiSamples
