import BarbecueCalculator from "../components/BarbecueCalculator/BarbecueCalculatorComponent.tsx";
import bgImage from '../assets/images/bg-1.jpg';

const styles = {
    backgroundImage: `url(${bgImage})`
};

const Calculator = () => {
    return (
        <div
            className="c-page-container"
            style={styles}
        >
            <h1>
                Calculadora de Churrasco
            </h1>

            <BarbecueCalculator />
        </div>
    );
};

export default Calculator;