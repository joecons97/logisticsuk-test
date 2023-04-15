import { useEffect, useState } from "react";
import DriverActivity from '../../components/DriverActivity'

const Index = () => {
    const [driverData, setDriverData] = useState({
        data:[],
        search: ""
    });
    const loadData = async () => {
        const resp = await fetch("/data/drivers.json");
        const data = await resp.json();
        setDriverData(state => ({...state, data: data.data}));
    };

    useEffect(() => {
        loadData();
    })

    return (
        <div>
            <span>Search: </span>
            <input onChange={(e) => {
                setDriverData({...driverData, search: e.target.value.toLowerCase()});
            }} value={driverData.search || ""} type="search"/>
            <div>
                {
                    driverData.data.length === 0 
                    ?
                    <h3>Loading...</h3>
                    :
                    <div>
                        {
                            driverData.data.filter(x => 
                                !driverData.search || 
                                x.forename.toLowerCase().includes(driverData.search) ||
                                x.surname.toLowerCase().includes(driverData.search) || 
                                x.vehicleRegistration.toLowerCase().includes(driverData.search)).map((data, index) => {
                                return (
                                    <DriverActivity key={index} driver={data}/>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Index;