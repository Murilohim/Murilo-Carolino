import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import url from "../../constants/constants";

function AdminPage() {

    const [data, setData] = useState([])
    
    useEffect(() => {
        axios
        .get(`${url}/trips`)
        .then((res) => {
            setData(res.data.trips)
        })
        .catch((err) => {
            console.log(err)
        })
    })
    
    const history = useHistory()

    const goToCreateTripPage = () => {
        history.push("/admin/trips/create")
    }

    const goBack = () => {
        history.goBack()
    }

    const goToHomePage = () => {
        history.push("/")
    }

    const goToTripDetailsPage = () => {
        history.push("/admin/trips/:id")
    }

    return (
        <div>
            <h1>Página Administrativa</h1>
            <div>
                {data.map((trip) => {
                    return (
                        <div>
                            <button onClick={goToTripDetailsPage}>
                                {trip.name}
                            </button>
                            <button>X</button>
                        </div>
                    ) 
                })}
            </div> <br></br>
            <button onClick={goToCreateTripPage}>Criar Viagem</button>
            <button onClick={goBack}>Logout</button>
            <button onClick={goToHomePage}>Voltar para Home</button>
        </div>
    )
}

export default AdminPage