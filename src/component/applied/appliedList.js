import React from 'react';
import "@fontsource/montserrat"
import Applied from './applied'

export default function AppliedList({ items,rerender ,  ...others }) {

    return (     
        <>
            {items.map((item)=>(
                <Applied key={item._id} details={item} rerender={rerender}></Applied>
            ))}
        </>
         
    )

}

