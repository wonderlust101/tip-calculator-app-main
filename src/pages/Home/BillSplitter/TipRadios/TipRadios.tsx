import React, {useEffect, useState} from "react";
import TextInput from "../../../../components/Form/TextInput/TextInput.tsx";
import './TipRadio.scss'

type TipRadiosProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    reset: boolean;
}

const tipRates: number[] = [5, 10, 15, 25, 50]

export default function TipRadios({onChange, reset}: TipRadiosProps) {
    const [customTip, setCustomTip] = useState('');
    const [selectedTipRate, setSelectedTipRate] = useState<number | null>(null);
    
    useEffect(() => {
        if (reset) {
            setCustomTip('');
            setSelectedTipRate(null);
        }
    }, [reset]);
    
    function onTipRateChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selectedRate = parseInt(event.target.value, 10);
        setSelectedTipRate(selectedRate);
        setCustomTip('');
        onChange(event);
    }
    
    function onCustomTipChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        setCustomTip(value);
        setSelectedTipRate(null);
        onChange(event);
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