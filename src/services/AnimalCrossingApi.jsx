import React from 'react';

export const fetchVillagers = async () => {

    const res = await fetch('http://ac-vill.herokuapp.com/villagers');
 
    const villagers = await res.json();
    return villagers;
}