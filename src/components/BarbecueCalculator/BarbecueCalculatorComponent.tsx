import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { foodNames } from '../../types/amountPeopleType.ts';
import styles from './barbecueCalculator.module.css';

const validationSchema = Yup.object().shape(
    {
        people: Yup.number().min(1, 'Número de pessoas é obrigatório'),
        foodSelection: Yup.array().of(Yup.string())
            .test(
                'check-foodSelection',
                'Selecione pelo menos um alimento',
                (array) => array !== null && array!.length > 0
            )
    }
);

const BarbecueCalculator = () => {
    const navigate = useNavigate();

    const handleSubmit = (values: { people: number; foodSelection: [] }) => {
        navigate('/resultado',
            {
                state: {
                    people: values.people,
                    foodSelection: values.foodSelection
                }
            }
        )
    }

    return (
        <div className={styles.c_container}>
            <Formik
                initialValues={{ people: 0, foodSelection: [] }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {
                    ({ errors, touched }) => (
                        <Form>
                            <div className={styles.c_input_group}>
                                <label
                                    className={styles.c_imput_label}
                                    htmlFor="people"
                                >
                                    Número de pessoas:
                                </label>

                                <Field
                                    className={styles.c_input_field}
                                    name='people'
                                    type='number'
                                />

                                {
                                    errors.people && touched.people ? (
                                        <p className={styles.c_error}>
                                            {errors.people}
                                        </p>
                                    ) : (
                                        null
                                    )
                                }
                            </div>

                            <h2>
                                Selecione os alimentos para o churrasco:
                            </h2>

                            {
                                Object.keys(foodNames).map(
                                    (food, index) => (
                                        <div key={index}>
                                            <label>
                                                <Field
                                                    className={styles.c_checkbox_input}
                                                    type={'checkbox'}
                                                    name={'foodSelection'}
                                                    value={food}
                                                />

                                                {foodNames[food]}
                                            </label>
                                        </div>
                                    )
                                )
                            }

                            {
                                errors.foodSelection && touched.foodSelection ? (
                                    <p className={styles.c_error}>
                                        {errors.foodSelection}
                                    </p>
                                ) : (
                                    null
                                )
                            }

                            <button
                                className={styles.c_calculate_button}
                                type='submit'
                            >
                                Calcular
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
};

export default BarbecueCalculator;