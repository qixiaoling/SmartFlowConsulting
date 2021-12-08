import React from 'react';

function TileCard(props) {

    return (
        <>

            {props.title ?
                <article className='tile-card-text'>
                    <h2>{props.title}</h2>
                    <p>{props.content}</p>
                    <a href={props.path}>Read More</a>
                </article>

                :
                <>

                    <img className='tile-img' src={props.imgUrl} alt='foto'/>

                </>


            }
        </>
    )
}

export default TileCard