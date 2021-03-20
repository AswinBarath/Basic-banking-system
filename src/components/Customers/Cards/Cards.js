import { Card, Button } from 'react-bootstrap';
const Cards = ({ id, name, email, balance }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{id} {name}</Card.Title>
                <Card.Text>
                    Email: {email}, Balance: {balance}
                </Card.Text>
                <Card.Link href="#"><Button>Transfer</Button></Card.Link>
                <Card.Link href="#"><Button>Shrink</Button></Card.Link>
            </Card.Body>
        </Card>
    );
}

export default Cards;