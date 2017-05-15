# react-router-v4-hocs
> Set of higher order components for `React Router v4`

### @deprecated
latest version of `react-router-dom` includes `withRouter`

### [React Router v4 docs](https://react-router.now.sh/)


### Usage
```js
import withRouter from 'react-router-v4-hocs/lib/withRouter';
// import { withRouter } from 'react-router-v4-hocs';

class MyComponent extends React.Component {
  ...
}


export default withRouter(MyComponent);
```

### API

##### withLocation

- Give wrapped component `location` prop.
- Default `location` shape:

  ```js
  {
    hash: String
    pathname: String
    query: Object | null
    search: String
    state: Object | null
  }
  ```

##### withRouter
- Give wrapped component `router` prop.
- Default `router` shape:

  ```js
  {
    blockTransitions: Function
    createHref: Function
    replaceWith: Function
    transitionTo: Function
  }
  ```
