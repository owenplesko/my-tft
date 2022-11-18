import {useState} from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const DropDown = () => {
    const regions = ['NA', 'EUW', 'KR', 'OCE']
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(regions[0])

    const onRegionSelect = (region) => {
        setSelected(region)
        setActive(false)
    }

    return (
        <div className='dropdown border'>
            <button className='select' onClick={() => setActive(!active)}>
                <span className='selected'>{selected}</span>
                <AiFillCaretDown className={active ? 'caret active' : 'caret'}/>
            </button>
            {active &&
                <ul className='menu'>
                    { regions.map(region => 
                        <li className={region === selected ? 'li selected' : 'li'}
                            onClick={() => onRegionSelect(region)}>
                            {region}
                        </li>)
                    }
                </ul>
            }
        </div>
    )
}

export default DropDown