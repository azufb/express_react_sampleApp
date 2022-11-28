import { axiosClient } from './axios';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const App = () => {
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState<any>();

  const handleGETApiResponse = async () => {
    const response = await axiosClient.get('/api');
    console.log(response.data.message);
  };

  const onSubmit = async (data: any) => {
    const param = {
      title: data.title
    };

    const response = await axiosClient.post('/addTask', param);
    setState(response);
  };

  useEffect(() => {
    const func = async () => {
      const getResponse = await axiosClient.get('/getTasks');
      console.log(getResponse);
    };

    func();
  }, [state])

  return (
    <div>
      <button onClick={handleGETApiResponse}>クリック！</button>

      <form onSubmit={handleSubmit(onSubmit)}>
          <label>タスク：</label>
          <input {...register('title')} />
          <input type='submit' />
      </form>
    </div>
  )
}

export default App;
