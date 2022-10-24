# useBreakpoints

React custom hook that returns variables with boolean values for responsive width detection.

#### Example of use:

- To change an element behavior from the front end. To be used when CSS media queries are not possible to use.

### On use:

```ruby
import useBreakpoints from './useBreakpoints';

// Deconstruct the variables from the hook as needed //

const ComponentPage = () => {
    const { isPhone, isTablet } = useBreakpoints()
  return (
    <div>
        <div>{isTablet ? <SomeIconHere /> : <AnotherTing />}
        </div>
    </div>
  );
```
