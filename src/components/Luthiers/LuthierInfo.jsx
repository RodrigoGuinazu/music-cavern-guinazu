import React from 'react'
import './luthier.css'
import PhoneIcon from '@material-ui/icons/Phone';

export default function LuthierInfo({ name, phone, expert, image }) {
    return (
        <div className="luthier-box">
            <img src={image} alt="luthier" />
            <br />
            <br />
            <h3 align="left">{name}</h3>
            <br />
            <h3 align="left"><PhoneIcon />{phone}</h3>
            <br />
            <h3 align="left">Experto en {expert}</h3>
            <br />
            <p align="left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quisquam, recusandae eaque error magnam laboriosam alias sequi ab esse aspernatur sapiente! Ad necessitatibus id ea nulla natus cumque saepe delectus eum incidunt dicta?</p>
        </div>
    )
}
