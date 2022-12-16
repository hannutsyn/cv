'use client'
import 'globals.css'
import { Baloo_2 } from '@next/font/google'
import styled from 'styled-components'
import NavBar from 'components/NavBar'
import { Suspense } from 'react'
import Loading from './loading'

const baloo = Baloo_2({ weight: ['400', '500', '600'], style: ['normal'], subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={baloo.className}>
        <NavBar />
        <Content>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Content>
      </body>
    </html>
  )
}

const Content = styled.main`
  margin-top: 40px;
  padding: 0 18px 32px;
`
