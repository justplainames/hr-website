import React from 'react';
import "@fontsource/montserrat"
import NotificationList from "./notificationList"

export default function Notifications({ items, ...others }) {

    return (     
        <>
            {items.map((item)=>(
                <NotificationList key={item._id} details={item}></NotificationList>
            ))}
        </>
         
    )

}

