import BarbecueResult from "../components/BarbecueResult/BarbecueResultComponent.tsx";
import bgImage from '../assets/images/bg-2.jpg';

const styles = {
    backgroundImage: `url(${bgImage})`
};

const Result = () => {
    return (
        <div
            className="c-page-container"
            style={styles}
        >
            <h1>
                Cálculo para o churrasco
            </h1>

            <BarbecueResult />
        </div>
    );
};

export default Result;