import { useSelector } from "react-redux";
import Item from "./Item"

const List = ({data}) => {
    const counter = useSelector(state => state.counter.value);
    if(counter <=5) {
        data = data.slice(0, counter);
    }
    return (
        <ul className="container">
            {counter <= 0 ? <p>Необходимо число ввести вначале:</p> : null}
            {counter > 5 ? <p>Все факты что есть у нас мы показали:</p> : null}
            {data.map(item => <Item key={item.id} item={item} />)}
        </ul>
    )
}

export default List;