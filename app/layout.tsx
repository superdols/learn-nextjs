import { Metadata } from "next"
import Navigatoin from "../components/navigation"
import '../styles/global.css';

export const metadata :Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigatoin />
        {children}
        </body>
    </html>
  )
}
