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
          <Image rated={rated}/>
          <Title>How did we do?</Title>
          <Text>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </Text>
          <Rating setRated = {setRated}/>
        </>
      :
      <>
        <Image rated={rated}/>
        <Title>Thank You</Title>
        <Text>
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </Text>
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

  

  <!-- Thank you state end -->
*/
export default App;
