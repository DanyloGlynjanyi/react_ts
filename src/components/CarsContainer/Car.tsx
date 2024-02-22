import {ICar} from "../../interfaces/carInterface";
import {FC} from "react";
import {ISetState} from "../../types/setStateType";
import {carService} from "../../services/carService";

interface IProops {
    car: ICar
    setCarForUpdate: ISetState<ICar>
    changeTrigger: () => void
}


const Car: FC<IProops> = ({car, setCarForUpdate, changeTrigger}) => {
    const {id, brand, price, year} = car;

    const deleteById = async () => {
        await carService.deleteById(id)
        changeTrigger()
    };

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => setCarForUpdate(car)}>Update</button>
            <button onClick={deleteById}>Delete</button>
        </div>
    );
};

export {Car};
