import {useState} from 'react'

export function PhoneInput() {
    const [value, setValue] = useState('');

    const handleInput = (input: string) => {

        let data = input.replace(/\D/g, '');

        if (data.length > 10) {
            return
        }
        if (data.length > 6) {
            data = `${data.slice(0, 3)}${data.slice(3, 6)}-${data.slice(6)}`
        }
        if (data.length > 3) {
            data = `(${data.slice(0, 3)})${data.slice(3)}`
        }

        setValue(data);
    }

    return (
        <div>
            <input data-testid="phone-number-input" value={value} onChange={e => handleInput(e.target.value)} className={"text-gray-800 px-3"}/>
        </div>
    )
}