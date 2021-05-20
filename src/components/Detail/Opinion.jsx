import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';

export default function Opinion() {
    return (
        <div className="opinion">
            <h3>Lorem ipsum dolor sit amet consectetur.</h3>
            <div className="puntuacion-opiniones">
                <StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/><StarIcon style={{fontSize: '25px', color: 'goldenrod' }}/>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deleniti!.</p>
            <div className="like-dislike"><ThumbUpAltIcon style={{marginRight: '25px'}}/><ThumbDownAltIcon /></div>
        </div>
    )
}
