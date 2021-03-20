import { Button } from 'react-bootstrap';
import './ViewButton.css'
const ViewButton = ({onButtonSubmit}) => {
    return (
        <div className="button">
            <Button 
            variant="success" 
            size="lg" 
            onClick={onButtonSubmit}
            >
                View all Customers
                </Button>
        </div>
    );
}

export default ViewButton;