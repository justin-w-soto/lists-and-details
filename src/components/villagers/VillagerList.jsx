import React, { Component } from 'react'
import Villager from './Villager';

const VilllagerList = ({ villagers }) => {

    const villagerList = villagers.map((villager) => (

        <li key={villager._id}>

            <Villager 
            name={villager.name}
            image={villager.image}
            personality={villager.personality}
            species={villager.species}
            skill={villager.skill}
            />

        </li>
    ));
    return <ul>{villagerList}</ul>;
};

export default VilllagerList;
