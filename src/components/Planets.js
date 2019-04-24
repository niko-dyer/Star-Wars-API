import React from 'react'
import { Header, Icon, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Planets extends React.Component {
    state = {
        planets: []
    }

    componentDidMount() {
        let planetURL = 'https://swapi.co/api/planets'
        axios
            .get(planetURL)
            .then(res => this.setState({ planets: res.data.results }))
    }

    render() {
        const colors = [
            'red',
            'blue',
            'orange',
            'yellow',
            'green'
        ]
        return (
            <>
                <Header icon textAlign='center'>
                    <Icon name='globe' circular />
                    Planets
                </Header>
                <Card.Group centered>
                    {this.state.planets.map((planet, i) => (
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
}