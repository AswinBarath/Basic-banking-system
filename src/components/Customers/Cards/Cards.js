import { Card, Button } from 'react-bootstrap';
const Cards = ({ name, email, balance, onSelectCustomer, showDetails }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                {showDetails === 'hide'
                    ?
                    <Card.Link>
                        <Button onClick={() => onSelectCustomer('show')}>Show details</Button>
                    </Card.Link>
                    :
                    <div>
                        <Card.Text>
                            Email: {email}
                            <br />
                            Balance: {balance}
                        </Card.Text>
                        <Card.Link>
                            <Button>Transfer</Button>
                        </Card.Link>
                        <Card.Link>
                            <Button onClick={() => onSelectCustomer('hide')}>Shrink</Button>
                        </Card.Link>
                    </div>
                }
            </Card.Body>
        </Card>
    );
}

export default Cards;