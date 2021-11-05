import React from 'react';
import "@fontsource/montserrat"
import Applied from './applied'

export default function AppliedList({ items, ...others }) {

    return (     
        <>
            {items.map((item)=>(
                <Applied key={item._id} details={item}></Applied>
            ))}
        </>
         
    )

}

