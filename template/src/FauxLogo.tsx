import React from 'react'

const squareSize = 9
const spacing = 1
const size = squareSize * 3 + spacing * 5
const end = size - 1

function points(x: number, y: number, tilt: number) {
  const pts = [
    [x, y + tilt],
    [x + squareSize - tilt, y],
    [x + squareSize, y + squareSize - tilt],
    [x + tilt, y + squareSize],
  ]

  return pts.map(([x, y]) => `${x},${y}`).join(' ')
}

interface Props {
  width?: number | string
  height?: number | string
}

function FauxLogo(props: Props) {
  return (
    <svg viewBox={`0 0 ${end} ${end}`} {...props}>
      <polygon fill="#fff" points={`0,0 ${end},0 ${end},${end} 0,${end}`} />
      {[
        [1, 1],
        [21, 1],
        [21, 21],
        [1, 21],
      ].map(([x, y]) => (
        <polygon fill="#000" points={points(x, y, 2)} />
      ))}
      {[
        [11, 1],
        [1, 11],
        [11, 11],
        [21, 11],
        [11, 21],
      ].map(([x, y]) => (
        <polygon fill="#000" points={points(x, y, 3)} />
      ))}
    </svg>
  )
}

export default FauxLogo
