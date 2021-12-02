import { Rate } from 'antd';


const Rating = ({ rating, isFilter, ratingValue, setRatingValue }) => {


    const handleChange = value => {
        setRatingValue(value);
    };


    return (
        <span>
            {isFilter ?
                // Rate for filter
                <Rate onChange={handleChange} value={ratingValue} />
                :
                // Rate for movieCard 
                <Rate disabled value={rating} />
            }
        </span>
    );
}

export default Rating