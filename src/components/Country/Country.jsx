import './country.css';

const Country = ({country}) => {
    console.log(country);
    const {name , flags } = country;
    return (
        <div className="country">
            <h3>Name : {name?.common} </h3>
            <img src={flags.png} alt="" />
            {/* <img src={flags.svg} alt="" /> */}
        </div>
    );
};

export default Country;

/**
 * 40-2 Display Countries In A Simple Way, Folder Structure
 */