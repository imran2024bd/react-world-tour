import CountryData from "../CountryData/CountryData";
// 01
// const CountryDetail = ({country , handleVisitedCountry , handleVisitedFlags}) => {
//     return (
//         <div>
//             <h4>Country Detail</h4>
//             <hr />
//             <CountryData
//             country = {country}
//             handleVisitedCountry = {handleVisitedCountry}
//             handleVisitedFlags = {handleVisitedFlags}
//             ></CountryData>
            
//         </div>
//     );
// };


// 02

const CountryDetail = (props) => {
    // const {country , handleVisitedCountry , handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Detail</h4>
            <hr />
            {/* <CountryData
            country = {country}
            handleVisitedCountry = {handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
            
        </div>
    );
};

export default CountryDetail;