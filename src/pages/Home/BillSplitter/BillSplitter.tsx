import React, {useState} from "react";

import './BillSplitter.scss';
import TextInput from "../../../components/Form/TextInput/TextInput.tsx";
import TipRadios from "./TipRadios/TipRadios.tsx";

export default function BillSplitter() {
    const [bill, setBill] = useState('142.55');
    const [numOfPeople, setNumOfPeople] = useState('5');
    const [tip, setTip] = useState('Custom');
    
    const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBill(event.target.value);
    };

    const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTip(event.target.value);
    };

    const handleNumOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumOfPeople(event.target.value);
    };
    
    return (
        <section className="bill-splitter">
            <div>
                <TextInput id="bill"
                           type="number"
                           label="Bill"
                           isRequired={false}
                           value={bill}
                           onChange={handleBillChange}/>

                <TipRadios onChange={handleTipChange}/>

                <TextInput id="people"
                           type="number"
                           label="Number of People"
                           isRequired={false}
                           value={numOfPeople}
                           onChange={handleNumOfPeopleChange}/>
            </div>
            
            <div>
                <p>{bill}</p>
                <p>{numOfPeople}</p>
                <p>{tip}</p>
            </div>
        </section>
    )
}