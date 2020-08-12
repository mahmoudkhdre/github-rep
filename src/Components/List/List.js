import React from 'react';

const list =({items,title}) => (
    <>
<h2>{title}</h2>
   <ul>
      {items.map(item =>
          <li key={item.label}>
              <strong>{item.label}</strong> {item.value}
          </li>
      )} 
   </ul>
   </>
)
export default list;