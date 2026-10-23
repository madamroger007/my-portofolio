import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'nodejs'

// Image metadata
export const size = {
  width: 400,
  height: 400,
}

export const contentType = 'image/png'


// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        M
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}