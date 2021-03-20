import cover from './cover.jpg';
import './cover.css';
const Cover = () => {
    return (
        <div>
            <img
                src={cover}
                className="cover"
            />
        </div>
    );
}

export default Cover;