
import Paths from './paths';
import React from 'react';
import Provider from './pages/Provider';




function App() {

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.type = "text/javascript";
  //   script.id = "getSelo";
  //   script.src = `../../js/script.js`;
  //   script.async = true;
  //   document.body.appendChild(script);
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);
  
  


  return (
    <>

      <Provider>
        <Paths/>
      </Provider>

    </>
  );
}

export default App;
