import { renderHook } from "@testing-library/react-hooks";
import useBreakpoints from "../useBreakpoints";

test("useBreakpoints devuelve correctamente valor para'isIphone'", () => {
        // Mock objet 'window' //
        Object.defineProperty(window, "matchMedia", {
            writable: true,
            value: jest.fn().mockImplementation((query) => ({
                matches: false, // The mock returns this value //
                media: query,
                onchange: null,
                addListener: jest.fn(), // deprecated
                removeListener: jest.fn(), // deprecated
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            })),
        });
    const { result } = renderHook(() => useBreakpoints())

    expect(result.current.isPhone).toBeFalsy()
})

test("useBreakpoints devuelve correctamente valor para 'isTablet'", () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: true,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
const { result } = renderHook(() => useBreakpoints())

expect(result.current.isTablet).toBeTruthy()
})

test("useBreakpoints devuelve correctamente valor para 'isDesktop'", () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
const { result } = renderHook(() => useBreakpoints())

expect(result.current.isTablet).toBeFalsy()
})

test("useBreakpoints devuelve correctamente valor para 'isWidescreen'", () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: true,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
const { result } = renderHook(() => useBreakpoints())

expect(result.current.isWidescreen).toBeTruthy()
})