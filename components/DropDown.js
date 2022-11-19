import {useState} from 'react'
import {AiFillCaretDown} from 'react-icons/ai'
import styles from '../styles/DropDown.module.css'

const DropDown = ({className, selection, selected, setSelected}) => {
    const [active, setActive] = useState(false)

    const onSelect = (item) => {
        setSelected(item)
        setActive(false)
    }

    return (
        <div className={`${styles.dropdown} ${className}`}>
            <div className={styles.head} onClick={() => setActive(!active)}>
                <span className={styles.item}>{selected.text}</span>
                <AiFillCaretDown className={`${styles.caret} ${active ? styles.rotate : ''}`}/>
            </div>
            {active &&
                <ul className={styles.selection}>
                    { selection.map(item => 
                        <li className={`${styles.item} ${item.value === selected.value ? styles.selected : ''}`}
                            key={item.value}
                            onClick={() => onSelect(item)}>
                            {item.text}
                        </li>)
                    }
                </ul>
            }
        </div>
    )
}

export default DropDown