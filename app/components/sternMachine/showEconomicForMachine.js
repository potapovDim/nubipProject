import React from 'react'

const costWithKoes = (quantity,cost) => quantity*cost*1.3 //Балансова вартість машини = коеф = 1.3 * Ц прейскурантна вартість обладнання
const costByPrise = (quantity,cost) => quantity*cost // прейскурантна вартість машини 
const capitalPayment = (costByPrise)=> 1.3*costByPrise //кількість машин перемножити з ціною і поефіцієтом
const yearProgramSternGiven = (productivityPerHour ,TperDay) =>365 * productivityPerHour* TperDay //продуктивність роботи машини на кількість днів в році і час роботи за день
const payment = (moneyPerHour,operators) => 365*1.3*1.9*moneyPerHour*operators//заробітня плата
const amortization = capitalPayment =>capitalPayment*0.142 //відрахування на амортизацію  капіталовкладення 14.2 відсотка від них
const TO = capitalPayment=> capitalPayment*0.18//відрахування на те і ремонти = 18 відсотків від капіталовкладення
const fuelPayment = (fuelPerHour = 8,hourQuantity=1.9,machineQuantity,priceForFuel) => {console.log(fuelPerHour,hourQuantity,machineQuantity,priceForFuel) 
    return fuelPerHour*hourQuantity*machineQuantity*priceForFuel*365}//вартість паливо що використовує трактор за рік роботи з кормозмішувачами
const workingPayment = (payment, TO, amortization, fuelPayment) =>(payment+ TO +amortization+fuelPayment)*1.05//експлуатаційні затрати визначаються по формулі сума тех обслуговування амортизації платні помножити на 1.05
const moneyForOneSqMeter = (workingPayment,volumePerYear) => workingPayment/volumePerYear // експлуатаційні затрати поділено на загальний об'єм для визначення вартості одного куба
const specificInvestment = (capitalPayment,workingPayment) => workingPayment + capitalPayment*1.15//експлуатаційні затрати + капітало вкладення поділено *0.18

export const EconomicEffect = ({quantity, machine, volumePerYear,peymantPerOur,persons,fuelPrice,priceForPreviousTechmology}) => {
    return  <div>
            <h3>Економічні показники для кормороздавальної машини {machine.brand} в кількості {quantity}</h3>
            <table style={{ width: '100%' }} className="table-bordered text-center">
                <thead>
                    <tr className="success">
                        <td style={{ width: '12%', height: '40px' }}>Балансова вартість машинин, грн</td>
                        <td style={{ width: '12%' }}>Прейскурантна вартість машин, грн</td>
                        <td style={{ width: '12%' }}>Капіталовкладення, грн</td>
                        <td style={{ width: '12%' }}>Річна програма роздавання кормів, м3</td>
                        <td style={{ width: '12%' }}>Оплата праці, грн</td>
                        <td style={{ width: '12%' }}>Амортизаційні відрахування, грн</td>
                        <td style={{ width: '12%' }}>Відрахування на техгнічне обслуговування і ремонти, грн</td>
                        <td style={{ width: '12%' }}>Затрати на пальне під час роботи роздавачів, грн</td>
                        <td style={{ width: '12%' }}>Експлуатаційні затрати, грн</td>
                        <td style={{ width: '12%' }}>Оплата на роздавання одного кубічного метру корму, грн</td>
                        <td style={{ width: '12%' }}>Питомі капіталовкладення на приготування одніїє тони суміші, грн</td>
                    </tr>
                </thead>
                <tbody>
               <td style={{ width: '14%', height: '40px' }}>{costWithKoes(quantity,machine.price).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{costByPrise(quantity,machine.price).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{capitalPayment(costByPrise(quantity,machine.price)).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{yearProgramSternGiven(machine.productivity,2).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{payment(peymantPerOur,quantity).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{amortization(capitalPayment(costByPrise(quantity,machine.price))).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{TO(capitalPayment(costByPrise(quantity,machine.price))).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{fuelPayment(undefined,undefined,quantity,fuelPrice).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{workingPayment(payment(peymantPerOur,quantity),TO(capitalPayment(costByPrise(quantity,machine.price))),amortization(capitalPayment(costByPrise(quantity,machine.price))),fuelPayment(undefined,undefined,quantity,fuelPrice)).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{moneyForOneSqMeter(
                           workingPayment(payment(peymantPerOur,quantity),TO(capitalPayment(costByPrise(quantity,machine.price))),amortization(capitalPayment(costByPrise(quantity,machine.price))),fuelPayment(undefined,undefined,quantity,fuelPrice)),
                            volumePerYear
                        ).toFixed(2)}</td>
                        <td style={{ width: '12%' }}>{specificInvestment(capitalPayment(costByPrise(quantity,machine.price)),
                             workingPayment(payment(peymantPerOur,quantity),TO(capitalPayment(costByPrise(quantity,machine.price))),amortization(capitalPayment(costByPrise(quantity,machine.price))),fuelPayment(undefined,undefined,quantity,fuelPrice))).toFixed(2)}</td>
                </tbody>
            </table>
        </div>
}