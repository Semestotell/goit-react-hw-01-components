import Profile from "./UserCard/userCard"
import user from "../components/UserCard/user.json"
import Statistics from "./Statistics/Statistics"
import data from 'components/Statistics/data.json'
import FriendList from "./FriendList/FriendList"
import friends from "components/FriendList/friends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import items from "./TransactionHistory/transactions.json"
import { Container } from "./container/constainer.styled"


export default function App() {
    return (
        <Container>
            <Profile
                    userAvatar={user.avatar}
                    userName={user.username}
                    tag={user.tag}
                    location={user.location}
                    stats={user.stats}
                /> 
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} />
            <TransactionHistory items={items}/>
        </Container>
    )
}
