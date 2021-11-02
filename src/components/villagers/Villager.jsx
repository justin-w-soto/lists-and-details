import React from 'react';

const Villager = ({ name, image, personality, species, skill }) => (
    <figure>

        <img src={image} alt={name} />
        <figcaption>
            <p>{name}</p>
            <p>{image}</p>
            <p>{personality}</p>
            <p>{species}</p>
            <p>{skill}</p>
        </figcaption>

    </figure>
);

export default Villager;
