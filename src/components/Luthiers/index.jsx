import React from 'react'
import LuthierInfo from './LuthierInfo'

export default function index() {
    return (
        <div align="center" className="categories-page">
            <h2 id="error" className="brands-h2">Conoce a los Luthiers</h2>
            <LuthierInfo name="Jorge" phone="116 8516978" expert="Grabacion" image="https://content.artofmanliness.com/uploads/2012/09/IMG_3853.jpg" />
            <LuthierInfo name="Pedro" phone="116 4563123" expert="Ukeleles" image="https://live-production.wcms.abc-cdn.net.au/cbc00d4a7b6e205f8390ab87dc05b4f3?impolicy=wcms_crop_resize&cropH=1277&cropW=2280&xPos=0&yPos=334&width=862&height=485" />
            <LuthierInfo name="Martin" phone="116 9371246" expert="Guitarras Acusticas" image="https://www.northcountryatwork.org/wp-content/uploads/2018/05/20180515-AndyFlynn-6.jpg" />
            <LuthierInfo name="Sebastian" phone="116 7391789" expert="Guitarras Electricas" image="https://thereview.ca/wp-content/uploads/2018/03/CB_2018march19_brian-monty-workshop-cover_WEB.jpg" />
        </div>
    )
}