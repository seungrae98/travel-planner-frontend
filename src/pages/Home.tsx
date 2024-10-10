import { useEffect, useState } from "react";
import "./Home.scss";
import fetchFlightData from "../apis/fetchFlightData";
import { FlightType } from "../types/FlightType";

const Home = () => {
    const [flightData, setFlightData] = useState<FlightType[]>([]);

    const getFlightData = async () => {
        const flight_type = "popular";
        const dpt_apt = "ICN";
        const arv_apt = "HND";
        const start_date = "2024-10-15";
        const end_date = "2024-10-20";

        try {
            const result = await fetchFlightData({
                flight_type: flight_type,
                dpt_apt: dpt_apt,
                arv_apt: arv_apt,
                start_date: start_date,
                end_date: end_date,
            });
            setFlightData(result);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFlightData();
    }, []);

    return (
        <div className="container">
            <h1> This is Home Page. </h1>
            <div>
                {flightData.map((flight, index) => (
                    <div key={index} className="flight-card">
                        <h2>{flight.airline}</h2>
                        <img
                            src={flight.airline_logo}
                            alt={`${flight.airline} logo`}
                            width="100"
                        />
                        <p>
                            Departure: {flight.dpt_dpt_time} from{" "}
                            {flight.dpt_dpt_apt}
                        </p>
                        <p>
                            Arrival: {flight.dpt_arv_time} at{" "}
                            {flight.dpt_arv_apt}
                        </p>
                        <p>
                            Return Departure: {flight.rtn_dpt_time} from{" "}
                            {flight.rtn_dpt_apt}
                        </p>
                        <p>
                            Return Arrival: {flight.rtn_arv_time} at{" "}
                            {flight.rtn_arv_apt}
                        </p>
                        <p>Price: {flight.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
