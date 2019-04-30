import React, { createContext } from 'react'
import { renderHook } from 'react-hooks-testing-library'
import { withContext } from '../src/hooks'

describe('With Context hook', () => {
  test('should get default context value', () => {
    const TestContext = createContext('test_context')
    const { result } = renderHook(() => withContext('testContext', TestContext)())

    expect(result.current.testContext).toBe('test_context')
  })

  test('should get value from provider', () => {
    const TestContext = createContext('test_context')

    /* eslint-disable */
    const wrapper = ({ children }) => (
      <TestContext.Provider value="context_value">{children}</TestContext.Provider>
    )
    /* eslint-enable */

    const { result } = renderHook(() => withContext('testContext', TestContext)(), { wrapper })

    expect(result.current.testContext).toBe('context_value')
  })
})
