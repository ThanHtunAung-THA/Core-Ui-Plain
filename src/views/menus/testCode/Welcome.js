import React, { useState, useEffect } from "react";
import Loading from "../../common/Loading";
import { CButton } from "@coreui/react";
import Chart from "react-apexcharts";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


const Welcome = (props) => {

    let history = useHistory();

    useEffect( () => {

        // preventing accessing without login == true
        let flag = localStorage.getItem('LOGIN');
        if (flag == "true") {
            console.log("Login process success");
        }else {
            history.push('/loginReact');
        }

        // loading time
        setLoading(true);
        setTimeout( () => {
            setLoading(false);
        }, 3000);
    }, []);

    const [ loading, setLoading ] = useState(false);

    const LoadClick = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 5000); // 5000 milliseconds = 5 seconds
    }
    
    const options = {
        chart: {
            id: 'basic-bar'
        },
        xaxis: {
            categories: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul','aug','setp','nov']
        }
    };
    const series = [
        {
            name: 'series 1',
            data: [10,20,30,40,50,60,70,80,90,100]
        }
    ];

    return (
        <>
            <div>
                <h1>Hello,{props.name}</h1>
                <CButton className="ok-btn" onClick={ LoadClick }> Loading... </CButton>
            </div>
            {/* <Loading start = {loading} /> */}
            <br /><br />

            <Chart options={ options } series={ series } type="bar" width="500" />
            <Chart options={ options } series={ series } type="area" width="500" />


        </>
    )
}

export default Welcome;