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
                <span className='item'>{selected}</span>
                <AiFillCaretDown className={active ? 'caret active' : 'caret'}/>
            </div>
            {active &&
                <ul className='selection'>
                    { selection.map(item => 
                        <li className={item === selected ? 'item selected' : 'item'}
                            onClick={() => onSelect(item)}>
                            {item}
                        </li>)
                    }
                </ul>
            }
        </div>
    )
}

export default DropDown