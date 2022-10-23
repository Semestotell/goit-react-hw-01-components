import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'

import {Container,Friends} from './FriendList.styled.jsx'

const FriendList = ({friends}) => {
    return (
        <Container>
            <Friends>
                {friends.map(({ id, avatar, name, isOnline }) => (
                    <FriendListItem
                        key={id}
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                    />
                ))}
            </Friends>
        </Container>
    )
}

export default FriendList

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    ),

};
