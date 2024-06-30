import React, { useState } from "react";
import Loading from "../../common/Loading";
import { CButton } from "@coreui/react";

const Welcome = (props) => {

    const [ loading, setLoading ] = useState(false);
    const LoadClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    return (
        <>
            <div>
                <h1>Hello,{props.name}</h1>
                <CButton className="ok-btn" onClick={ LoadClick }> Loading... </CButton>
            </div>
            <Loading start = {loading} />
        </>
    )
}

export default Welcome;