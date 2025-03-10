import { useState, useEffect } from "react";
import axios from "axios";
import { Employee } from "../../types/employee";
import { formatPhone } from "../../utils/phoneFormatter";
import EmployeeTableDesktop from "./employeetable-desktop";
import EmployeeTableMobile from "./employeetable-mobile";
import search from "../../assets/search-icon.svg";

interface ScreenSize { width: number; height: number; }

export default function EmployeeTable() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get<Employee[]>('http://localhost:3000/employees');
            setEmployees(response.data);
        } 
        fetchData();
    }, []);

    const [screenSize, setscreenSize] = useState<ScreenSize>({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
        setscreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isMobile = screenSize.width < 768;

    const [searchTerm, setSearchTerm] = useState('');
    
    const filteredUsers = employees.filter(employee => {
        return (
            employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.job.toLowerCase().includes(searchTerm.toLowerCase()) ||
            formatPhone(employee.phone).includes(searchTerm)
        );
    });

    return (
        <div className="container">
            <div className="search-area">
                <h1>Funcionários</h1>
                <input type="text" placeholder="Pesquisar" value={searchTerm} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}/>
                <span><img src={search} alt="Search Icon" /></span>  
            </div> 
            {isMobile? 
            ( <EmployeeTableMobile employees={filteredUsers}/>) 
            : 
            ( <EmployeeTableDesktop employees={filteredUsers}/>)
            }
        </div>
    );
}