import { useDispatch } from "react-redux";
import { getUserValue } from "../slices/counter";

const Form = () => {
    const dispatch = useDispatch();

    const handleInput = (e) => {
        dispatch(getUserValue(Number(e.target.value)))
    }

    return (
        <div className="container form">
            <p>Сколько фактов о фильме любимом хочешь ты узнать?</p>
            <input 
                type="number" 
                placeholder="Число введи немедля..."
                onChange={(e) => handleInput(e)}
            />
        </div>
    )
}

export default Form;