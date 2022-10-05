import React from 'react';
import GlobalStyle from './styles/global'
import Card from './components/card/';
import StarImage from './components/starImage';
import Title  from './components/title/';
import Text  from './components/text/';
import Rating  from './components/rating/';
import IllustrationImage from './components/illustrationImage/';
import  Rated  from './components/rated/';

function App() {
  const [rated, setRated] = React.useState(false);
  const [rate, setRate] = React.useState('');
  return (
    <div className="App">
      <GlobalStyle />
      <Card rated={rated}>
      {!rated ? 
        <>
          <StarImage/>
          <Title>How did we do?</Title>
          <Text rated={rated}>
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </Text>
          <Rating setRated = {setRated} setRate={setRate} rate={rate} />
        </>
      :
      <>
        <IllustrationImage/>
        <Rated />
        <Title>Thank you!</Title>
        <Text rated={rated}>
          We appreciate you taking the time to give a rating. If you ever need more support, 
          don’t hesitate to get in touch!
        </Text>
      </>
      } 
      </Card>
    </div>
  );
}
export default App;
