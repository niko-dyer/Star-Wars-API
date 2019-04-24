import React, {useState, useEffect} from 'react'
import { Header, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect( () => {
        let planetURL = 'https://swapi.co/api/planets'
        axios 
            .get(planetURL)
            .then(res => setPlanets(res.data.results))
    })

        const colors = [
            'red',
            'blue',
            'orange',
            'yellow',
            'green'
        ]
        return (
            <>
                <Header style={{fontSize: '4em'}} icon textAlign='center' color='yellow'>
                    <Icon name='globe' circular />
                    Planets
                </Header>
                <Card.Group centered>
                    {planets.map((planet, i) => (
                        <Card key={i} color={colors[Math.floor(Math.random() * colors.length)]} style={{ padding: '2em' }}>
                            <Link to={`/planets/${i}`}>
                                <Card.Header style={{color: 'black'}}>
                                    {planet.name}
                                </Card.Header>
                            </Link>
                        </Card>
                    ))}
                </Card.Group>
            </>
        )
}

export default Planets