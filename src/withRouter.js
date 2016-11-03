import React from 'react';


export default (MyComponent) => {
  function withRouter(props, context) {
    return (
      <MyComponent
        {...props}
        router={context.router}
      />
    );
  }
  withRouter.contextTypes = {
    router: React.PropTypes.object
  };

  return withRouter;
};
