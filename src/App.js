import {useState} from 'react';
import Loading from './components/Loading';
import Header from './components/Header';
import DisplayData from './components/DisplayData';

function App() {
  const [keyword, setKeyword] = useState('');
  const [loading, isLoading] = useState(false);
  const [data, setData] = useState();
  const onChange = (val) => setKeyword(val);

  const fetchData = async (keyword) => {
    try {
      setData();
      isLoading(true);
      const data = await (await fetch(`https://arnavsimer.pythonanywhere.com/search/${keyword}`)).json()
      setData(data);
      isLoading(false);
    } catch (error) {
        console.log(error);
    }    
  }

  return (
    <div className="App">
      <Header {...{ keyword, onChange, fetchData }}></Header>      
      <Loading {...{ loading }} />
      <DisplayData {...{data}} />
    </div>
  );
}

export default App;
