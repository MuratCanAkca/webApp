import React from 'react'

const Jsx5 = () => {
  
    const names = ["Ali","Veli","Ayşe","Fatma"];
    const cities = ["İstanbul","Ankara","Giresun","Hatay"];

    return (
    <>   
        <ul>
            {names.map((name , index) =>( 
            <li key={index}>{name}</li>))}
        </ul>

        <select>
            {cities.map((city,index) =>( 
            <option key={index}>{city}</option>))}
        </select>

    </> 
    )
    

}

export default Jsx5