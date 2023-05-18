import SwaggerUI from 'swagger-ui-react';

import spec from './swagger';
import "swagger-ui-react/swagger-ui.css";

function App() {
  return (
    <div className="App">
      <SwaggerUI 
        spec={spec}
      />
    </div>
  );
}

export default App;
