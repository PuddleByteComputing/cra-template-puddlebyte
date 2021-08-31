import React from 'react'

const squareSize = 9
const spacing = 1
const size = squareSize * 3 + spacing * 5

function points(x: number, y: number, tilt = 0) {
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
    <svg
      baseProfile="full"
      version="1.1"
      viewBox={`0 0 ${size - 1} ${size - 1}`}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon
        fill="#fff"
        points={`1,1 ${size - 2},1 ${size - 2},${size - 2} 1,${size - 2}`}
      >
        <animate
          attributeName="fill"
          fill="freeze"
          from="#000"
          to="#fff"
          dur={0.4}
        />
        <animate
          attributeName="fill"
          fill="freeze"
          from={`1,1 ${size - 2},1 ${size - 2},${size - 2} 1,${size - 2}`}
          to={`0,0 ${size},0 ${size},${size} 0,${size}`}
          begin={0.4}
          dur={0.1}
        />
      </polygon>
      {[
        [1, 1],
        [21, 1],
        [21, 21],
        [1, 21],
      ].map(([x, y]) => (
        <polygon key={`pt${x}-${y}`} fill="#000" points={points(x, y)}>
          <animate
            attributeName="points"
            fill="freeze"
            from={points(x, y)}
            to={points(x, y, 2)}
            begin={0.5}
            dur={0.2}
          />
        </polygon>
      ))}
      {[
        [11, 1],
        [1, 11],
        [11, 11],
        [21, 11],
        [11, 21],
      ].map(([x, y]) => (
        <polygon key={`pt${x}-${y}`} fill="#000" points={points(x, y)}>
          <animate
            attributeName="points"
            fill="freeze"
            from={points(x, y)}
            to={points(x, y, 3)}
            begin={0.6}
            dur={0.3}
          />
        </polygon>
      ))}
    </svg>
  )
}

export default FauxLogo
