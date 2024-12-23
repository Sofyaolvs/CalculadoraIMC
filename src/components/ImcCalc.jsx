import { useState } from "react";
import Button from "./Button";
import "./imcCalc.css";

const ImcCalc = ({calcImc}) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
//limpa o form
    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    };

    // const calculateImc = (e) => {
    //     e.preventDefault();
    //     if (height && weight) {
    //         const imc = (parseFloat(weight) / (parseFloat(height) * parseFloat(height))).toFixed(2);
    //         alert(`Your IMC is ${imc}`);
    //     } else {
    //         alert("Please fill in both fields!");
    //     }
    // };

    //digitos validos (bloqueia)
    const validDigits = (text)=>{
        return text.replace(/[^0-9,]/g,"")
    }

    const handleHeightChange =(e)=>{
        const upadateValue = validDigits(e.target.value)
        setHeight(upadateValue)
    }

    const handleWeightChange =(e)=>{
        const upadateValue = validDigits(e.target.value)
        setWeight(upadateValue)
    }


    return (
        <div id="calc-container">
            <h2>BMI Calculator</h2>
            <form id="imc-form">
                <div className="form-inputs">
                    <div className="form-control">
                        <label htmlFor="height">Height:</label>
                        <input
                            type="text"
                            name="height"
                            id="height"
                            placeholder="Ex: 1.75"
                            onChange={(e) => handleHeightChange(e)}
                            value={height}
                        />
                    </div>

                    <div className="form-control">
                        <label htmlFor="weight">Weight:</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            placeholder="Ex: 70.5"
                            onChange={(e) => handleWeightChange(e)}
                            value={weight}
                        />
                    </div>
                </div>

                <div className="action-control">
                    <Button id="calc-btn" text="Calculate" action={(e)=> calcImc(e, height,weight)} />
                    <Button id="clear-btn" text="Clear" action={clearForm} />
                </div>
            </form>
        </div>
    );
};

export default ImcCalc;
