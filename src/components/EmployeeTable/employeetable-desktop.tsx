import { Employee } from "../../types/employee";
import { formatPhone } from "../../utils/phoneFormatter";

interface EmployeeTableDesktopProps {
    employees: Employee[];
}

export default function EmployeeTableDesktop({employees} : EmployeeTableDesktopProps) {
    return (
        <table id="employees-table">
            <thead>
                <tr>
                    <th className="photo-col">FOTO</th>
                    <th className="name-col">NOME</th>
                    <th className="job-col">CARGO</th>
                    <th className="date-col">DATA DE ADMISSÃO</th>
                    <th className="phone-col">TELEFONE</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.id}>
                        <td className="photo-col"><img className="photo" src={employee.image} alt={employee.name} /></td>
                        <td className="name-col">{employee.name}</td>
                        <td className="job-col">{employee.job}</td>
                        <td className="date-col">{new Date(employee.admission_date).toLocaleDateString('pt-BR')}</td>
                        <td className="phone-col">{formatPhone(employee.phone)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}