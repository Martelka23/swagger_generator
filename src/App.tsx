import SwaggerUI from 'swagger-ui-react';
import "swagger-ui-react/swagger-ui.css";

import {spec} from './generator/generator';
import { vpbxSpec } from './swagger';


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
