import style from './UserSaved.module.css';

import { CiSaveDown2 } from 'react-icons/ci';
import Container from "../../../UI/Container/Container.component";
import InfoBox from '../../InfoBox/InfoBox.component';
const UserSaved = () => {
    return (
        <Container className={style.saved}>
            <InfoBox>
                <InfoBox.Header heading="Only you can see what you've saved" />
                <InfoBox.Body>
                    <CiSaveDown2 size={50} color="var(--themeColor)" />
                    <h1>Save</h1>
                    <InfoBox.Body.Paragraph>Save photos and videos that you want to see again. No one is notified, and only you can see what you've saved.</InfoBox.Body.Paragraph>
                </InfoBox.Body>
            </InfoBox>
        </Container>
    );
};

export default UserSaved;
