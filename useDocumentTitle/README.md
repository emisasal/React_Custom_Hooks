# useDocumentTitle
React custom hook for dynamically change the label in the browser tab.

#### Example of use:
- To show the name of different sections of a SPA in the browser tab label.

### On use:

```ruby
import useDocumentTitle from './useDocumentTitle';

// Use in the main page or wrapper of the component //

const ComponentPage = () => {

  return (
    <div>
      {useDocumentTitle(`Awesome site | Example Page Title`)}
      {children}
    </div>
  );
```