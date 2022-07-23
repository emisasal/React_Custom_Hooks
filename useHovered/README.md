# useHovered
React custom hook for hoovering a group of elements.

#### Example of use:
- To change the color of a menu (text, icons, etc.)

### On use:
- Import the hook in component.
- Deconstruct the array of elements --> const [isHovered, handleMouseEnter, handleMouseLeave] = useHovered()
- onMouseEnter={handleMouseEnter}
- onMouseLeave={handleMouseLeave}
- Use isHovered boolean value to change the element/s behavior