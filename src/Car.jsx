import { useSelector, useDispatch} from "react-redux";
import { useState } from "react";
import { addCar } from "./redux/reducers/car";

const Car = () => {
    const cars = useSelector(s => s.car.cars);
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Cars</h1>
                <input type="text" placeholder="model"
                onChange={ e=>{
                    setModel(e.target.value)
                }}
                value={model}
                />
                <input type="text" placeholder="year"
                 onChange={ e=>{
                    setYear(e.target.value)
                }}
                value={year}
                />

                <button onClick={()=>{
                    if(model.length > 0 && year.length === 4){
                        dispatch(addCar({
                            model,
                            year
                        }))
                    }
                }}>add</button>
                {
                    cars.map(item =>{
                        return <h1>{item.model}</h1>
                    })
                }
        </div>
    );
}

export default Car;
