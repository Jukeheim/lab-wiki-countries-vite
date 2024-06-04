import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getCountries } from "../services/Axios";
import { ScaleLoader } from "react-spinners";

const CountryDetails = () => {
    const { countryId } = useParams
    const [ loading, setLoading ] = useState(true)
    const [ country, setCountries] = useState(true)

    useEffect(() => {
        getCountries(countryId)
        .then((country) => {
            setCountries(country)
        })
        .catch(err => {console.error(err)
        })
        .finally(() => {
            setLoading(false)
        }) 
    }, [countryId])

    if(country === null) {
        return <div className="container"><ScaleLoader /></div>
    }
    return (
        <div className="container">
            <p style={{ fontSize: "24px", fontWeight: "bold" }}>Country Details</p>

            {loading ? <div className="container"><ScaleLoader /></div> : (
                <>
                    <h1>{country.name.official}</h1>

                    <img
                        src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
                        className="img-thumbnail"
                        alt={country.name.common}
                        width={50}
                    ></img>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital</td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} km
                                    <sup>2</sup>
                                </td>
                            </tr>
                            <tr>
                                <td>Borders</td>
                                <td>
                                    <ul style={{ listStyle: "none" }}>
                                        {country.borders.map((border, i) => (
                                            <li key={i}>
                                                <Link to={`/${border}`}>{border}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            )}
        </div>
    )
}

export default CountryDetails;
