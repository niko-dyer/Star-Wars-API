import React from 'react'
import axios from 'axios';
import { Header, Container, Card, Icon } from 'semantic-ui-react'

class People extends React.Component {
    state = {
        people: [],
        planets: []
    }

    componentDidMount() {
        let peopleURL = 'https://swapi.co/api/people'
        axios
            .get(peopleURL)
            .then(res => this.setState({ people: res.data.results }))
    }

    showHome = (url) => {
        axios 
            .get(url)
            .then(res => {
                return <div>{res.data}</div>
            })
            .catch(err => {
                console.log(err)
            })
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
                <Container style={{backgroundImage: 'url(https://i.ytimg.com/vi/_kaqhy2iV7c/maxresdefault.jpg)'}}>
                    <Header style={{fontSize: '4em'}} icon textAlign='center' color='yellow'>
                        <Icon name='users' circular />
                        People
                    </Header>
                    <Card.Group centered>
                    {this.state.people.map(person => (
                        <>
                            <Card style={{padding: '2em'}} color={colors[Math.floor(Math.random()*colors.length)]}>
                                <Card.Header>
                                    {person.name}
                                </Card.Header>
                                <Card.Meta>
                                    {this.showHome(person.homeworld)}
                                </Card.Meta>
                            </Card>
                        </>
                        ))}
                    </Card.Group>
                </Container>
            </>
        )
    }

}

export default People