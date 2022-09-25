import { useNavigate } from 'react-router-dom';

// import './directory-item.styles.scss';
import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);
    return (
        // <div className='directory-item-container'>
        //     <div
        //         className='background-image'
        //         style={{
        //             backgroundImage: `url(${imageUrl})`,
        //         }}
        //     />
        //     <div className='body'>
        //         <h2>{title}</h2>
        //         <p>Shop Now</p>
        //     </div>
        // </div>

        <DirectoryItemContainer onClick={onNavigateHandler}>
            <BackgroundImage imageUrl={imageUrl} />
            <Body>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </Body>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;