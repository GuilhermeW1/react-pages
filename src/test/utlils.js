import * as React from 'react'
import '@testing-library/jest-dom'

import { render as rtlRender } from '@testing-library/react'

import { ThemeProv } from '../context/theme-provider'
import { BrowserRouter } from 'react-router-dom'
import { ListProvider } from '../context/list'

function render(children) {
  return rtlRender(
    <BrowserRouter>
      <ThemeProv>
        <ListProvider>{children}</ListProvider>
      </ThemeProv>
    </BrowserRouter>,
  )
}

export { render }
