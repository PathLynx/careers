import { SpeedInsights } from "@vercel/speed-insights/next"

import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>PathLynx Careers</title>
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
