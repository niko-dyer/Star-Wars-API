import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Container, Button } from 'semantic-ui-react'

export default class Home extends React.Component {
    render() {
        return (
            <Container fluid>
                <Header textAlign='center' style={{ transform: 'translateY(5em)', fontSize: '4em', letterSpacing: '.5em' }} color='yellow'>
                    STAR WARS
                </Header>
                <Link to='/people'>
                    <Button size='large' style={{ transform: 'translate(35em, 20em)' }} inverted color='yellow'>
                        People
                    </Button>
                </Link>
                <Link to='/planets'>
                    <Button size='large' style={{ transform: 'translate(40em, 20em)' }} inverted color='yellow'>
                        Planets
                    </Button>
                </Link>
            </Container>
        )
    }
}