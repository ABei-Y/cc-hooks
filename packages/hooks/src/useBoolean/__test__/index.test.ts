import { renderHook, act } from '@testing-library/react'
import useBoolean from '../index'

const callToggle = (hook) => {
  act(() => hook.result.current[1].toggle())
}

const getHookValue = (hook) => hook.result.current[0]

describe('useBoolean', () => {
  it ('基础功能测试', async () => {
    const hook = renderHook(() => useBoolean());
    expect(getHookValue(hook)).toBeFalsy();

    callToggle(hook);
    expect(getHookValue(hook)).toBeTruthy()
  })
})

  