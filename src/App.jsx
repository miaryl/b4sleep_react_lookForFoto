import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageGallery from './components/imageGallery/ImageGallery'

function App() {
  const [fetchData, setFetchData] = useState([]);
  const ref = useRef();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(ref.current.value);

    // api url
    const endpointUrl = `https://pixabay.com/api/?key=51887710-20fef25778ef215a5f35846f3&q=${ref.current.value}&image_type=photo`;
    // data fetching
    fetch(endpointUrl)
     .then((res) => {
      return res.json();

     })
     .then((data) => {
      console.log(data.hits);
      setFetchData(data.hits);
     });

  
  };

  return (
    <div className='container'>
      <h2>My Pixabay</h2>
      <form onSubmit={(e)=> handleSubmit(e)}>
        <input type='text' placeholder='look for pics' ref={ref}/>
      </form>
      <ImageGallery fetchData={fetchData}/>
    </div>
  )
}

export default App
