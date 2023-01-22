import './App.css';
import Form from './components/Form';
import List from './components/List';
import shortid from "shortid"

const data = [
  {
    id: shortid.generate(),
    text: "прообразом Чубакки стал пёс режиссёра"
  },
  {
    id: shortid.generate(),
    text: "актёрам разрешили подобрать любимый цвет для своих световых мечей"
  },
  {
    id: shortid.generate(), 
    text: "в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину"
  },
  {
    id: shortid.generate(), 
    text: "дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу"
  },
  {
    id: shortid.generate(), 
    text: "планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок"
  }
];

function App() {
  return (
    <div className="App">
      <Form />
      <List data={data}/>
    </div>
  );
}

export default App;
