import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
	<div className={styles.card}>
		<img src={avatar} alt='Avatar' width='48' />
		<p className={styles.cardTitle}>{name}</p>
		{isOnline ? (
			<p className={styles.online}>Online</p>
		) : (
			<p className={styles.offline}>Offline</p>
		)}
	</div>
);

export default FriendListItem;
