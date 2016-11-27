import React from 'react'

const costWithKoes = (quantity,cost) => quantity*cost*1.3 //Балансова вартість машини = коеф = 1.3 * Ц прейскурантна вартість обладнання
const costByPrise = (quantity,cost) => quantity*cost // прейскурантна вартість машини 
const capitalPayment = (costByPrise)=> 1.3*costByPrise //кількість машин перемножити з ціною і поефіцієтом
const yearProgramSternGiven = (productivityPerHour ,TperDay) =>365 * productivityPerHour* TperDay //продуктивність роботи машини на кількість днів в році і час роботи за день
const payment = (moneyPerHour,operators) => 365*1.3*1.9*moneyPerHour*operators//заробітня плата
const amortization = capitalPayment =>capitalPayment*0.142 //відрахування на амортизацію  капіталовкладення 14.2 відсотка від них
const TO = capitalPayment=> capitalPayment*0.18//відрахування на те і ремонти = 18 відсотків від капіталовкладення
const workingPayment = (payment, TO, amortization) =>(payment+ TO +amortization)*1.05//експлуатаційні затрати визначаються по формулі сума тех обслуговування амортизації платні помножити на 1.05
const moneyForOneSqMeter = (workingPayment,volumePerYear) => workingPayment/volumePerYear // експлуатаційні затрати поділено на загальний об'єм для визначення вартості одного куба
const specificInvestment = (capitalPayment,workingPayment) => workingPayment + capitalPayment*1.15//експлуатаційні затрати + капітало вкладення поділено *0.18



export const EconomicEffect = ({quantity, machine, volumePerYear,peymantPerOur,persons}) => {
    return  <div>
            <h3>Економічні показники для кормороздавальної машини {machine.brand} в кількості {quantity}</h3>
            <table style={{ width: '100%' }} className="table-bordered text-center">
                <thead>
                    <tr className="success">
                        <td style={{ width: '14%', height: '40px' }}>Балансова вартість машинин</td>
                        <td style={{ width: '14%' }}>Прейскурантна вартість машин</td>
                        <td style={{ width: '14%' }}>Капіталовкладення</td>
                        <td style={{ width: '14%' }}>Річна програма роздавання кормів</td>
                        <td style={{ width: '14%' }}>Оплата праці</td>
                        <td style={{ width: '14%' }}>Амортизаційні відрахування</td>
                        <td style={{ width: '14%' }}>Відрахування на техгнічне обслуговування і ремонти</td>
                        <td style={{ width: '14%' }}>Експлуатаційні затрати</td>
                        <td style={{ width: '14%' }}>Оплата на роздавання одного кубічного метру корму</td>
                        <td style={{ width: '14%' }}>Питомі капіталовкладення на приготування одніїє тони суміі</td>
                    </tr>
                </thead>
                <tbody>
               <td style={{ width: '14%', height: '40px' }}>{costWithKoes(quantity,machine.price)}</td>
                        <td style={{ width: '14%' }}>{costByPrise(quantity,machine.price)}</td>
                        <td style={{ width: '14%' }}>{capitalPayment(costByPrise(quantity,machine.price))}</td>
                        <td style={{ width: '14%' }}>{yearProgramSternGiven(machine.productivity,2)}</td>
                        <td style={{ width: '14%' }}>{payment(peymantPerOur,quantity)}</td>
                        <td style={{ width: '14%' }}>{amortization(capitalPayment(costByPrise(quantity,machine.price)))}</td>
                        <td style={{ width: '14%' }}>{TO(capitalPayment(costByPrise(quantity,machine.price)))}</td>
                        <td style={{ width: '14%' }}>{workingPayment(payment(peymantPerOur,quantity),TO(capitalPayment(costByPrise(quantity,machine.price))),amortization(capitalPayment(costByPrise(quantity,machine.price))))}</td>
                        <td style={{ width: '14%' }}>{moneyForOneSqMeter(
                            workingPayment(payment(peymantPerOur,quantity),TO(capitalPayment(costByPrise(quantity,machine.price))),amortization(capitalPayment(costByPrise(quantity,machine.price)))),
                            volumePerYear
                        )}</td>
                        <td style={{ width: '14%' }}>{specificInvestment(capitalPayment(costByPrise(quantity,machine.price)),
                             workingPayment(payment(peymantPerOur,quantity),TO(capitalPayment(costByPrise(quantity,machine.price))),amortization(capitalPayment(costByPrise(quantity,machine.price)))))}</td>
                </tbody>
            </table>
        </div>
}