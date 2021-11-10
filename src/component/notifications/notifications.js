import React from 'react';
import "@fontsource/montserrat"
import NotificationList from "./notificationList"

export default function Notifications({ items ,rerendering, ...others }) {

    return (     
        <>
            {items.map((item)=>(
                <NotificationList key={item._id} details={item} id={item._id} rerendering={rerendering} ></NotificationList>
            ))}
        </>
         
    )

}

