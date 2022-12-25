import React from 'react'
import "./SidebarRow.css";

function SidebarRow( {selected, Icon, title } ) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
{ /*  //here we use component as a prop so we can imput there differnt icons in it //cool thing that i have to use  */

}
        <Icon className="sidebarRow__icon"/>   
        <h2 className='sidebarRow__title'>{title}</h2>
        </div>
  )
}

export default SidebarRow