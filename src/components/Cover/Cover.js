import cover from './cover.jpg';
import './cover.css';
const Cover = () => {
    return (
        <div>
            <img
                src={cover}
                className="cover"
                alt="TSF Bank cover image"
            />
        </div>
    );
}

export default Cover;