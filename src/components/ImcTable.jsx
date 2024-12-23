import './imcTable.css'
import Button from './Button'

export const ImcTable = ({data, imc, info, infoClass, resetCalc}) => {
  return (
    <div id='result-container'>
        <p id='imc-number'>
          Your BMI: <span className={infoClass}>{imc}</span>
        </p>

        <p id='imc-info'>
          Current situation:<span className={infoClass}>{info}</span>
        </p>

        <h3>Look the classifications:</h3>
        <div id='imc-table'>
          <div className='table-header'>
             <h4>BMI</h4>
          <h4>Classification:</h4>
          <h4>Obesity</h4>
          </div>
         
        {data.map((item)=>(
          //pega os dados de data
          <div className='table-data' key={item.info}>
            <p>{item.classification}</p>
            <p>{item.info}</p>
            <p>{item.obesity}</p>

          </div>
        ))}
        </div>
        <Button id="back-btn" text="Back" action={resetCalc}/>
    </div>
  )
}
