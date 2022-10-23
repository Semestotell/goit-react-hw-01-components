import PropTypes from 'prop-types'
import { Card, Stat, Avatar, Name } from './FriendListItem.styled'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
            <Card>
                <Stat status={isOnline}></Stat> 
                <Avatar
                    src={avatar}
                    alt="User avatar"
                    width="48"
                />
                <Name>{name}</Name>
            </Card>
    )
}

export default FriendListItem

FriendListItem.propTypes = {
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    avatar: PropTypes.string,
}