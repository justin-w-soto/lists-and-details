import React, { Component } from 'react';
import VilllagerList from '../components/villagers/VillagerList';
import { fetchVillagers } from '../services/AnimalCrossingApi';

class AnimalCrossingContainer extends Component {
    state = {
        loading: true,
        villagers: []
    }
    
    async componentDidMount() {
        const villagers = await fetchVillagers();
        this.setState({
            villagers,
            loading: false
        });
    }
    
    render() { 
        const { loading, villagers } = this.state;
        if (loading) {
            return <h1>Loading...</h1>;
        }
        return <VilllagerList villagers={villagers}/>;
    }
}
 
export default AnimalCrossingContainer;