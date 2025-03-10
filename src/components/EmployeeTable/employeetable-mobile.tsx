import { Employee } from "../../types/employee";
import RowCard from "../RowCard"
import circle from "../../assets/circle.svg"

interface EmployeeTableMobileProps {
    employees: Employee[];
}

export default function EmployeeTableMobile({employees} : EmployeeTableMobileProps) {
    return (
        <table id="employees-table">
            <thead>
                <tr>
                    <th className="photo-col">FOTO</th>
                    <th className="name-col">NOME</th>
                    <th><img className="circle-icon" src={circle} alt="Circle icon"/></th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <RowCard key={employee.id} employee={employee}/>
                ))}
            </tbody>
        </table>
    )
}