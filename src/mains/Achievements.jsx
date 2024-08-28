import achievements from "../assets/achievements.json"
import Page from "../components/Page.jsx";
import AchievementItem from "../components/achievements/AchievementItem.jsx";
import styled from "styled-components";

const StyledUl = styled.ul`
    padding: 0;
    width: 70%;
    margin: 0 auto;
`;

export default function Achievements() {

    return (
        <Page title={"Achievements"}>
            <StyledUl>
                {achievements.map((elem) => <AchievementItem key={elem.title} data={elem}/>)}
            </StyledUl>

        </Page>
    );
}