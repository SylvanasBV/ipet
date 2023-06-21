import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Item = ({item}) => (
    <Card style={{ width: '18rem' }} className="float-start">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{item.Food_Name}</Card.Title>
            <Card.Text>cost = {item.cost}</Card.Text>
            <Button variant="primary">More information</Button>
        </Card.Body>
    </Card>
)
