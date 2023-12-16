import { Card } from '../../utils/models'
import styles from './UserCard.module.css';

const UserCard = ({name, strength, defence, img}: Card) => {

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <img className={styles.img} src={img} alt="picture of cat" />
      </div>

      <div className={styles.body}>
        <div>name: {name}</div>
        <div>strength: {strength}</div>
        <div>defence: {defence}</div>
      </div>
    </div>
    )
}

export default UserCard