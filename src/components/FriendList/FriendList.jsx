import styles from './FriendList.module.css';

import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => (
	<ul className={styles.friendList}>
		{friends.map(({ id, avatar, name, isOnline }) => (
			<li key={id}>
				<FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
			</li>
		))}
	</ul>
);

export default FriendList;
