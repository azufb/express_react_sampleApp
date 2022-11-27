import { axiosClient } from './axios';

const App = () => {

  const handleGETApiResponse = async () => {
    const response = await axiosClient.get('/api');
    console.log(response.data.message);
  }

  return (
    <div>
      <button onClick={handleGETApiResponse}>クリック！</button>
    </div>
  )
}

export default App;
