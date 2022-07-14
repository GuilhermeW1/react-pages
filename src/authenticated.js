/* eslint-disable react/prop-types */
//i need to add a react prop types

import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TesteScreen } from './screens/teste'
import { Page } from './screens/page'
import { Home } from './screens/home'
import GlobalStyles from './styles/global-styles'
import { ErrorBoundary } from 'react-error-boundary'
import { ModalProvider } from './components/modal'
import styled from 'styled-components'
import { Nav } from './components/nav/index'

const ErrorDiv = styled.div`
  color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}}
`

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
    <ErrorBoundary FallbackComponent={FullPageErrorFallback}>
      <ModalProvider>
        <GlobalStyles />
        <Nav />
        <main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <AppRoutes />
          </ErrorBoundary>
        </main>
      </ModalProvider>
    </ErrorBoundary>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{ whiteSpace: 'normal' }}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function FullPageErrorFallback({ error }) {
  return (
    <ErrorDiv role="alert">
      <p>Uh oh... There`s a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </ErrorDiv>
  )
}

export { Authenticated }
