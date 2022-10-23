import PropTypes from 'prop-types'
import { Card, Description, Avatar, UserName, UserInfo, StatsList, StatsItem, Label, Quantity } from './userCard.styled';



const Profile = ({
    userAvatar,
    userName,
    tag,
    location,
    stats: {followers,views,likes}
}) => {
    return (
    <Card>
        <Description>
            <Avatar
            src={userAvatar}
            alt={userName}
            />
            <UserName>{userName}</UserName>
            <UserInfo>@{tag}</UserInfo>
            <UserInfo >{location}</UserInfo>
        </Description>
        <StatsList>
            <StatsItem>
                <Label>Followers</Label>
                <Quantity>{followers}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Views</Label>
                <Quantity>{views}</Quantity>
            </StatsItem>
            <StatsItem>
                <Label>Likes</Label>
                <Quantity>{likes}</Quantity>
            </StatsItem>
        </StatsList>
    </Card>)
};

export default Profile;

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
};