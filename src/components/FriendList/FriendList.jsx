import styles from './FriendList.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
	<ul className={styles.friendList}>
		{friends.map((friend) => (
			<li key={friend.id}>
				<FriendListItem
					avatar={friend.avatar}
					name={friend.name}
					isOnline={friend.isOnline}
				/>
			</li>
		))}
	</ul>
);

export default FriendList;
