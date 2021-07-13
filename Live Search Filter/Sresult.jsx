import React from 'react';

const Sresult=(props)=>{

    const images=`https://source.unsplash.com/600x400/?${props.name}`;
    return (
        <>
            <img src={images} alt="Search_Pics"/>
        </>
    )
}

export default Sresult;