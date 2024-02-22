import {FC} from "react";
import {Car} from "./Car";
import {ICar} from "../../interfaces/carInterface";
import {ISetState} from "../../types/setStateType";

interface IProps {
    cars: ICar[]
    changeTrigger: () => void
    setCarForUpdate: ISetState<ICar>
}

const Cars: FC<IProps> = ({cars, setCarForUpdate, changeTrigger}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}
                                  changeTrigger={changeTrigger}/>)}
        </div>
    );
};

export {Cars};