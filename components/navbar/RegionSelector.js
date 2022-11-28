import {useState} from 'react'
import {AiFillCaretDown} from 'react-icons/ai'

const DropDown = ({selected, setSelected}) => {
    const regions = process.env.regions
    const regionsDisplayValues = process.env.regionsDisplayValues
    const [active, setActive] = useState(false)

    const onSelect = (item) => {
        setSelected(item)
        setActive(false)
    }

    return (
        <div className='w-[80px] cursor-pointer font-bold'>
            <div className='flex items-center p-2' onClick={() => setActive(!active)}>
                <span className='flex-grow select-none'>{regionsDisplayValues[selected]}</span>
                <AiFillCaretDown className={`${active ? 'rotate-180' : ''}`}/>
            </div>
            {active &&
            <div className='h-0'>
                <ul className='flex flex-col items-stretch shadow-md'>
                    { regions.map(region => 
                        <li className={`${region === selected ? 'bg-darkAccent1' : 'bg-dark2'} 
                                        select-none opacity-90 px-2 py-1 flex-grow z-10
                                        hover:bg-darkAccent2 hover:opacity-100`}
                            key={region}
                            onClick={() => onSelect(region)}>
                            {regionsDisplayValues[region]}
                        </li>)
                    }
                </ul>
            </div>
            }
        </div>
    )
}

export default DropDown