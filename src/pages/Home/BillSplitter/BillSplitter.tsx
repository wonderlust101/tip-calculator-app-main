import React, {useEffect, useState} from "react";

import './BillSplitter.scss';
import TextInput from "../../../components/Form/TextInput/TextInput.tsx";
import TipRadios from "./TipRadios/TipRadios.tsx";
import Button from "../../../components/Button/Button.tsx";

export default function BillSplitter() {
    const [bill, setBill] = useState(142.55);
    const [numOfPeople, setNumOfPeople] = useState(5);
    const [tip, setTip] = useState(0);
    const [tipAmount, setTipAmount] = useState(0)
    const [totalPerPerson, setTotalPerPerson] = useState(0)
    const [isResetting, setIsResetting] = useState(false);
    
    // Calculate tip amount and total per person whenever bill, numOfPeople, or tip changes
    useEffect(() => {
        const calculatedTipAmount = (tip / 100) * bill / numOfPeople;
        
        setTipAmount(calculatedTipAmount);
        setTotalPerPerson(bill / numOfPeople + calculatedTipAmount);
    }, [bill, numOfPeople, tip]);

    const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBill(parseFloat(event.target.value));
    };

    const handleTipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTip(parseFloat(event.target.value));
    };

    const handleNumOfPeopleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNumOfPeople(parseFloat(event.target.value));
    };

    function handleReset() {
        setBill(0);
        setNumOfPeople(0);
        setTip(0);
        setTipAmount(0);
        setTotalPerPerson(0);
        setIsResetting(true);
        setTimeout(() => setIsResetting(false), 0);
    }

    return (
        <section className="bill-splitter">
            <div className="bill-splitter__inputs">
                <TextInput id="bill"
                           className='bill-splitter__bill-input'
                           placeholder='0.00'
                           type="number"
                           label="Bill"
                           isRequired={false}
                           value={bill ? bill : ''}
                           onChange={handleBillChange}/>

                <TipRadios onChange={handleTipChange} reset={isResetting}/>

                <TextInput id="people"
                           className='bill-splitter__people-input'
                           placeholder='1'
                           type="number"
                           label="Number of People"
                           isRequired={false}
                           value={numOfPeople ? numOfPeople : ''}
                           onChange={handleNumOfPeopleChange}/>
            </div>

            {/*TODO: Get the below to another component*/}
            <div className="bill-splitter-results">
                <div className="bill-splitter-results__results">
                    <div className="bill-splitter-results__row">
                        <div className="bill-splitter-results__label">
                            <p className="bill-splitter-results__label-title">Tip Amount</p>
                            <p className="bill-splitter-results__label-rate">/ person</p>
                        </div>
                        
                        <p className='bill-splitter-results__amount'>${isNaN(tipAmount) || !isFinite(tipAmount) ? '0.00' : tipAmount.toFixed(2)}</p>
                    </div>
                    <div className="bill-splitter-results__row">
                        <div className="bill-splitter-results__label">
                            <p className="bill-splitter-results__label-title">Total</p>
                            <p className="bill-splitter-results__label-rate">/ person</p>
                        </div>

                        <p className='bill-splitter-results__amount'>${isNaN(totalPerPerson) || !isFinite(totalPerPerson) ? '0.00' : totalPerPerson.toFixed(2)}</p>
                    </div>
                </div>

                <Button className='button--green' onClick={handleReset}>Reset</Button>
            </div>
        </section>
    )
}