import React from 'react';
import { LoadingState, Cloud, Spinner } from './loadingState.component.style';

const loading = () => (
    <LoadingState>
        <Cloud>
            <Spinner/>
        </Cloud>
    </LoadingState>
);

export default loading;
