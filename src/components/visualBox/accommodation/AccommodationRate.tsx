import { AccommodationType } from "../../../types/AccommodationType";
import "./AccommodationRate.scss";

interface AccommodationRateProps {
    data: AccommodationType;
}

const AccommodationRate = ({ data }: AccommodationRateProps) => {
    return (
        <div className="acc-rate">
            <div className="top">
                <div className="title">Accommodation Rate</div>
            </div>
            <div className="detail">
                <div>{data.rate}</div>
            </div>
        </div>
    );
};

export default AccommodationRate;
