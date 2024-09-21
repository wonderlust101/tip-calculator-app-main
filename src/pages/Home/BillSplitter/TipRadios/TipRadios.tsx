import React, {useState} from "react";
import TextInput from "../../../../components/Form/TextInput/TextInput.tsx";

type TipRadiosProps = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const tipRates: number[] = [
    5,
    10,
    15,
    25,
    50
]

export default function TipRadios({onChange}: TipRadiosProps) {
    const [customTip, setCustomTip] = useState('');
    const [selectedTipRate, setSelectedTipRate] = useState<number | null>(null);

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
        <div>
            {tipRates.map((tipRate) => (
                <div key={tipRate}>
                    <label htmlFor={"tipAt" + tipRate}>{tipRate}%</label>
                    <input
                        type="radio" 
                        name="tipRate" 
                        id={"tipAt" + tipRate} 
                        value={tipRate}
                        checked={selectedTipRate === tipRate}
                        onChange={onTipRateChange}/>
                </div>
            ))}
            
            <TextInput id='customTip' 
                       type='number' 
                       isRequired={true} 
                       placeholder='Custom' 
                       value={customTip} 
                       onChange={onCustomTipChange}/>
        </div>
    )
}