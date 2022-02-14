import logo from './logo.svg';
import './App.css';
import Card from "./Card/Card.js"
import Sport from "./Card/Sport.js"
import img1 from "./Images/1.jpg"
import img2 from "./Images/2.jpg"
import img3 from "./Images/3.jpg"

function App() {
  return (
    <>
      <Sport></Sport>
      <div className="App">
        <Card title="Lorem Ipsum is simply dummy text Lorem Ipsum simply dummy text"
          imageUrl={img1}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Card>

        <Card title="Lorem Ipsum is simply dummy text Lorem Ipsum "
          imageUrl={img2}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Card>

        <Card title="Lorem Ipsum is simply dummy text Lorem Ipsum  "
          imageUrl={img3}
          body="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Card>
      </div>
    </>

  );
}

export default App;
