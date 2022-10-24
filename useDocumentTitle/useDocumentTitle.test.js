import { renderHook } from "@testing-library/react-hooks";
import useDocumentTitle from "../useDocumentTitle";

test("El hook useDocumentTitle se ejecuta correctamente", () => {
    const testChangeTitle = "Change Title"

    Object.defineProperty(document, "title", {
        writable: true,
        value: "Test Title"
    });
    expect(document.title).toBe("Test Title")

    renderHook(() => useDocumentTitle(testChangeTitle));
    expect(document.title).toBe(testChangeTitle)
});