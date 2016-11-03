# react-router-hocs
> Set of higher order components for `React Router v4`


### Usage
```js
import withRouter from 'react-router-hocs/withRouter';


class MyComponent extends React.Component {
  ...
}


export default withRouter(MyComponent);
```

### [React Router v4 docs](https://react-router.now.sh/)


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
