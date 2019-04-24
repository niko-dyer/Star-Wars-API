import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Header, Container, Card, Icon } from 'semantic-ui-react'

const People = () => {
    const [people, setPeople] = useState([])

    useEffect( () => {
        let peopleURL = 'https://swapi.co/api/people'
        axios
            .get(peopleURL)
            .then(res => {
                setPeople(res.data.results)
            })
    }, [])

    const colors = [
        'red',
        'blue',
        'orange',
        'yellow',
        'green'
    ]
    return (
        <>
            <Container style={{backgroundImage: 'url(https://i.ytimg.com/vi/_kaqhy2iV7c/maxresdefault.jpg)'}}>
                <Header style={{fontSize: '4em'}} icon textAlign='center' color='yellow'>
                    <Icon name='users' circular />
                    People
                </Header>
                <Card.Group centered>
                {people.map(person => (
                    <>
                        <Card style={{padding: '2em'}} color={colors[Math.floor(Math.random()*colors.length)]}>
                            <Card.Header>
                                {person.name}
                            </Card.Header>
                            <Card.Meta>
                            </Card.Meta>
                        </Card>
                    </>
                    ))}
                </Card.Group>
            </Container>
        </>
    )
}

export default People