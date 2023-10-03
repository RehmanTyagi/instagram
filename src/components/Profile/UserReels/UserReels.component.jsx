import style from './UserReels.module.css'

import { CiYoutube } from 'react-icons/ci'
import Container from "../../../UI/Container/Container.component"
import InfoBox from "../../InfoBox/InfoBox.component"
const UserReels = () => {
    return (
        <Container className={style.reels}>
            <InfoBox>
                <InfoBox.Header heading="you and entire community can see your reels until you make it private" />
                <InfoBox.Body>
                    <CiYoutube size={50} color="var(--themeColor)" />
                    <h1>Reels</h1>
                    <InfoBox.Body.Paragraph>This is the section of your own reels. you can re-watch them or delete. does not cost you a rupee if you not delete it.</InfoBox.Body.Paragraph>
                </InfoBox.Body>
            </InfoBox>
        </Container>
    )
}

export default UserReels
