# useWindowDimensions
React custom hook for capturing the size (width and/or heigth) of an elements.

#### Example of use:
- To deal with responsive issues that can't be resolved with CSS media queries.

### On use:

```ruby
import useWindowDimensions from './hooks/useWindowDimensions';

const Component = () => {
  const { height, width } = useWindowDimensions();
  /* you can also use default values or alias to use only one prop: */
  // const { height: windowHeight = 480 } useWindowDimensions();

  return (
    <div>
      width: {width} ~ height: {height} 
      // It can be used as style parameters.
    </div>
  );
```