import Item from "./Item"

const List = ({data}) => {
    return (
        <ul className="container">
            {data.map(item => <Item key={item.id} item={item} />)}
        </ul>
    )
}

export default List;