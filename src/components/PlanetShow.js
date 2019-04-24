import React from 'react'
import axios from 'axios'
import { Table, Header, Image } from 'semantic-ui-react'

export default class Planet extends React.Component {
    state = {
        planet: {}
    }

    componentDidMount() {
        const { id } = this.props.match.params
        let intId = parseInt(id)
        let newId = intId + 2
        axios
            .get(`https://swapi.co/api/planets/${newId}`)
            .then(res => {
                this.setState({ planet: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const planetURL = [
            'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5My8zNTYvb3JpZ2luYWwvcGxhbmV0MTAuanBn',
            'https://aasnova.org/wp-content/uploads/2018/03/fig1-8.jpg',
            'https://cdn.cnn.com/cnnnext/dam/assets/160614135229-01-kepler-1647b-super-169.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTdcdmWz9bShPbVzBBchUWekxBjZlR1t-bKx9hiDS6N8ZfXfj8',
            'https://spectatorblogs.imgix.net/files/2017/05/iStock-481013807.jpg?auto=compress,enhance,format&crop=faces,entropy,edges&fit=crop&w=820&h=550',
            'https://boygeniusreport.files.wordpress.com/2017/11/8371682954_6b070daa8c_b.jpg?quality=98&strip=all&w=782',
            'https://i2.wp.com/canadianhomesteading.ca/wp-content/uploads/2019/03/shocking-study-mercury-is-the-closest-planet-to-earth-not-venus.jpg?resize=760%2C456&ssl=1'
        ]
        return (
            <>
                <Image centered circular size='medium' src={planetURL[Math.floor(Math.random()*planetURL.length)]} />
                <Header style={{fontSize: '4em'}} color='yellow' textAlign='center'>
                    {this.state.planet.name}
                </Header>
                <Table inverted color='black' celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Climate</Table.HeaderCell>
                        <Table.HeaderCell>Gravity</Table.HeaderCell>
                        <Table.HeaderCell>Diameter</Table.HeaderCell>
                        <Table.HeaderCell>Rotation Period</Table.HeaderCell>
                        <Table.HeaderCell>Population</Table.HeaderCell>
                        <Table.HeaderCell>Terrain</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>{this.state.planet.climate}</Table.Cell>
                        <Table.Cell>{this.state.planet.gravity}</Table.Cell>
                        <Table.Cell>{this.state.planet.diameter}</Table.Cell>
                        <Table.Cell>{this.state.planet.rotation_period}</Table.Cell>
                        <Table.Cell>{this.state.planet.population}</Table.Cell>
                        <Table.Cell>{this.state.planet.terrain}</Table.Cell>
                    </Table.Row>
                </Table.Body>
                </Table>
            </>
        )
    }
}