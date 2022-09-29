import React from 'react';
import GlobalStyle from './styles/global'

import Card from './components/card/';
import Image from './components/image/';
import Title  from './components/title/';
import Text  from './components/text/';
import Rating  from './components/rating/';

function App() {
  const [rated, setRated] = React.useState(false)
  return (
    <div className="App">
      <GlobalStyle />
      <Card>
      {!rated ? 
        <>
          <Image />
          <Title />
          <Text />
          <Rating setRated = {setRated}/>
        </>
      :
      <>
        <Image />
        <Title />
        <Text />
      </>
      } 
      </Card>
    </div>
  );
}
/* 



 
  1 2 3 4 5

  Submit

  <!-- Rating state end -->

  <!-- Thank you state start -->

  You selected <!-- Add rating here --> out of 5

  Thank you!

  We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!

  <!-- Thank you state end -->
*/
export default App;
