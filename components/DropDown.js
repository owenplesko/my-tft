import {useState} from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const DropDown = ({selection, selected, setSelected}) => {
    const [active, setActive] = useState(false)

    const onSelect = (item) => {
        setSelected(item)
        setActive(false)
    }

    return (
        <div className='dropdown border'>
            <div className='head' onClick={() => setActive(!active)}>
                <span className='item'>{selected.text}</span>
                <AiFillCaretDown className={active ? 'caret rotate' : 'caret'}/>
            </div>
            {active &&
                <ul className='selection'>
                    { selection.map(item => 
                        <li className={item.value === selected.value ? 'item selected' : 'item'}
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