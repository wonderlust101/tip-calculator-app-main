import React, {useEffect, useState} from "react";
import TextInput from "../../../../components/Form/TextInput/TextInput.tsx";
import './TipRadio.scss'

type TipRadiosProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reset: boolean;
}

const tipRates: number[] = [
    5,
    10,
    15,
    25,
    50
]

export default function TipRadios({onChange, reset}: TipRadiosProps) {
    const [customTip, setCustomTip] = useState('');
    const [selectedTipRate, setSelectedTipRate] = useState<number | null>(null);

    // Reset logic - When the reset prop changes, reset both customTip and selectedTipRate
    useEffect(() => {
        if (reset) {
            setCustomTip('');
            setSelectedTipRate(null);
        }
    }, [reset]);
    
    // TODO: Understand this code
    // TODO: Cleanup the code
    // Handle radio button selection
    function onTipRateChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedRate = parseInt(event.target.value, 10);
        setSelectedTipRate(selectedRate);  // Set selected radio button
        setCustomTip('');  // Reset custom tip value
        onChange(event);  // Trigger the parent onChange handler
    }

    // Handle custom tip input change
    function onCustomTipChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setCustomTip(value);  // Update the custom tip state
        setSelectedTipRate(null);  // Deselect the radio buttons
        onChange(event);  // Trigger the parent onChange handler
    }
    
    return (
        <div className='tip-radio'>
            {tipRates.map((tipRate) => (
                <div className='tip-radio__container' key={tipRate}>
                    <input
                        type="radio"
                        className='tip-radio__button'
                        name="tipRate" 
                        id={"tipAt" + tipRate} 
                        value={tipRate}
                        checked={selectedTipRate === tipRate}
                        onChange={onTipRateChange}/>
                    <label className='tip-radio__label'  htmlFor={"tipAt" + tipRate}>{tipRate}%</label>
                </div>
            ))}
            
            <TextInput id='customTip' 
                       className='tip-radio__input'
                       type='number' 
                       isRequired={true} 
                       placeholder='Custom' 
                       value={customTip} 
                       onChange={onCustomTipChange}/>
        </div>
    )
}