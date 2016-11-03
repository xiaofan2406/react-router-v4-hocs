import React from 'react';
import { LocationSubscriber } from 'react-router/Broadcasts';


export default MyComponent => (
   function withLocation(props) {
     return (
       <LocationSubscriber>
         {location => (
           <MyComponent
             {...props}
             location={location}
           />
         )}
       </LocationSubscriber>
     );
   }
);
