import style from "./contacts.module.css";
import { FaUser, FaPhoneAlt  } from "react-icons/fa";


const Contact = ({ contact, onDelete }) => {
  return (
    <li className={style.item}>
      <div className={style.left}>
        <div className={style.line}>
          <div className={style.iconWrap}>
            <FaUser className={style.icon} />
          </div>
          <span>{contact.name}</span>
        </div>

        <div className={style.line}>
          <div className={style.iconWrap}>
            <FaPhoneAlt  className={style.icon} />
          </div>
          <span>{contact.number}</span>
        </div>
      </div>

      <button
        className={style.delete}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;