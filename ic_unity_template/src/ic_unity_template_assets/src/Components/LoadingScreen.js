import * as React from 'react';

function LoadingScreen(props) {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "700px"
        }}>
            <p>Percent Complete: {props.value}%</p>
        </div>
    );
}

export default LoadingScreen;