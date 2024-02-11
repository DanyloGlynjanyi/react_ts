import {useEffect, useState} from "react";
import {CarsForm} from "./CarsForm";
import {Cars} from "./Cars";
import {carService} from "../../services/carService";
import {ICar} from "../../interfaces/carInterface";


const CarsContainer = () => {
    const [cars, setCars] = useState<ICar[]>([])

    useEffect(() => {
            carService.getAll().then(({data}) => setCars(data))
        },
        [])
    return (
        <div>
            <CarsForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsContainer};