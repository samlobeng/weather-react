import React, { Fragment } from 'react';

import Header from '../Header';
import styles from './Page.module.css';
import Form from '../Form'
import Error from '../Error';
import Loader from '../Loader'
import Forecast from '../Forecast'
import useForecast from '../../hooks/useForecast'


const Page = () => {

    const {isError, isLoading, forecast}=useForecast()
    return (
        <Fragment>
            <Header />
            <div className={styles.box}>
                {/* Form */}
                <Form/>
                {isError && <Error message={isError} />}
                {isLoading && <Loader />}
                {forecast && <Forecast />}
            </div>
        </Fragment>
    );
};

export default Page;
