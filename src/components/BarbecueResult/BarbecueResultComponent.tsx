import { useLocation, useNavigate } from 'react-router-dom';
import { amountPeople, foodNames } from '../../types/amountPeopleType.ts';
import { Food } from '../../types/foodType.ts';
import styles from './barbecueResult.module.css';

type BarbecueResult = {
    people: number
    foodSelection: Food[]
}

const BarbecueResult = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as BarbecueResult;

    const totalForFood = state.foodSelection.reduce(
        (accumulator, food) => {
            accumulator[food] = (amountPeople[food] * state.people) / 1000;
            return accumulator;
        },
        {} as Record<Food, number>
    );

    const restart = () => {
        navigate('/');
    };

    return (
        <div className={styles.c_container}>
            <h2 className={styles.c_title}>
                Resultado para {state.people} pessoas:
            </h2>

            {
                state.foodSelection.map(
                    (food) => (
                        <p
                            className={styles.c_result_text}
                            key={food}
                        >
                            {foodNames[food]}: {totalForFood[food]} total kg
                        </p>
                    )
                )
            }

            <button
                className={styles.c_reset_button}
                onClick={restart}
            >
                Reiniciar
            </button>
        </div>
    );
};

export default BarbecueResult;