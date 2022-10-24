import { renderHook, act } from "@testing-library/react-hooks";
import useHovered from "../useHovered";

test("El hook useHovered se ejecuta correctamente", () => {
    const { result } = renderHook(() => useHovered())

    expect(result.current[0]).toBeFalsy()

    act(() => {
        result.current[1]() // handleMouseEnter
    })
    expect(result.current[0]).toBeTruthy()

    act(() => {
        result.current[2]() // handleMouseLeave
    })
    expect(result.current[0]).toBeFalsy()
})