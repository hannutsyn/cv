'use client'
import 'globals.css'
import { Baloo_2 } from '@next/font/google'
import styled from 'styled-components'

const baloo = Baloo_2({ weight: ['400', '500', '600'], style: ['normal'], subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={baloo.className}>
        <Content>{children}</Content>
      </body>
    </html>
  )
}

const Content = styled.main`
  padding: 0 18px 32px;
`
