import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TesteScreen } from './screens/teste'
import { Page } from './screens/page'
import { Home } from './screens/home'
import GlobalStyles from './styles/global-styles'
import { ModalProvider } from './components/modal'

import { Nav } from './components/nav/index'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/teste" element={<TesteScreen />} />
      <Route path="/page" element={<Page />} />
      <Route path="*" element={<h1> Not found</h1>} />
    </Routes>
  )
}

function Authenticated() {
  return (
    <ModalProvider>
      <GlobalStyles />
      <Nav />
      <main>
        <AppRoutes />
      </main>
    </ModalProvider>
  )
}

export { Authenticated }
