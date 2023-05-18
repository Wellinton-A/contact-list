import { RenderOptions, render } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'

import configStore, { appStore, rootState } from '../store/store'
import { Provider } from 'react-redux'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<rootState>
  store?: appStore
}

export const renderWithProvider = (
  element: React.ReactElement,
  {
    preloadedState = {},
    store = configStore(preloadedState),
    ...otherOptions
  }: ExtendedRenderOptions = {}
) => {
  function encapsulator({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }

  return {
    store,
    ...render(element, {
      wrapper: encapsulator,
      ...otherOptions
    })
  }
}
