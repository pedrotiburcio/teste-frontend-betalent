import { useState } from "react";
import { Employee } from "../../types/employee";
import { formatPhone } from "../../utils/phoneFormatter";
import down from "../../assets/down-arrow.svg"
import up from "../../assets/up-arrow.svg"

interface EmployeeRowCard {
    employee: Employee;
}

export default function RowCard({employee} : EmployeeRowCard) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() : void {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <>
            <tr className={`card-cover ${isOpen ? 'open' : ''}`} key={employee.id}>
                <td className="card-person">
                        <span className="person">
                            <img className="photo" src={employee.image} alt={employee.name} />
                            <h3 className="name">{employee.name}</h3>
                        </span>
                        <button className="card-button" onClick={handleClick}>
                            {isOpen ? <img src={up} alt="Up arrow" /> : <img src={down} alt="Down arrow" />}
                        </button>
                </td>
                {isOpen && (
                <>
                    <td className="card-content card-job">
                        <h2 className="card-label">Cargo</h2>
                        <h3 className="card-value">{employee.job}</h3>
                    </td>
                    <td className="card-content card-date">
                        <h2 className="card-label">Data de admissão</h2>
                        <h3 className="card-value">{new Date(employee.admission_date).toLocaleDateString('pt-BR')}</h3>
                    </td>
                    <td className="card-content card-phone">
                        <h2 className="card-label">Telefone</h2>
                        <h3 className="card-value">{formatPhone(employee.phone)}</h3>
                    </td>
                </>
                )}
            </tr>
        </>
    )
}