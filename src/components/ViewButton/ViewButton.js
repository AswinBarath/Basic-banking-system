import { Button } from 'react-bootstrap';
import './ViewButton.css'
const ViewButton = ({ onRouteChange }) => {
    return (
        <div className="button">
            <Button 
            variant="success" 
            size="lg" 
            onClick={ () => onRouteChange('customers')}
            >
                View all Customers
                </Button>
        </div>
    );
}

export default ViewButton;