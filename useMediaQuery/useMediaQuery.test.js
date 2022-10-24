import { renderHook } from "@testing-library/react-hooks";
import useMediaQuery from "../useMediaQuery";

test("El hook useMediaQuery devuelve valor 'true'", () => {
    // Mock de objeto 'window' //
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: true, // El mock devuelve este valor //
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
    const { result } = renderHook(() => useMediaQuery("(max-width: 375px)"));

    expect(result.current).toBeTruthy();
});

test("El hook useMediaQuery devuelve valor 'false'", () => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: jest.fn().mockImplementation((query) => ({
            matches: false, // El mock devuelve este valor //
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
    const { result } = renderHook(() => useMediaQuery("(max-width: 375px)"));

    expect(result.current).toBeFalsy();
});