import './App.css'
import Navigation from './header.jsx'
import SlideShow from './content.jsx'

function fetchData() {
  let tempImages = [];
  fetch('https://fakestoreapi.com/products')
          .then((response) => {
              if (!response) {
                  throw new Error('HTTP response error: ', response.status)
              }
              return response;
          })
          .then(response => response.json())
          .then((response) => {
              response.forEach(image => {
                tempImages.push(image);
              });
          }
  )
  return tempImages;
}

function App() {

  return (
    <>
    <Navigation />
    <SlideShow image={fetchData()}/>
    </>
  )
}

export default App
