import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } 
        
        catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    return (
        <div>
        <h1>ITEMS NG MGA NAGSEND</h1>
            <ul>
                {items.map(item => (
                <li key={item.id}> 
                {item.Fname}
                {item.Mname}
                {item.Lname}
                {item.Address}
                {item.Email}
                {item.Phone} 
                {item.Municipality}
                {item.Baranggay}
                {item.Dbirth}
                {item.Sex}
                {item.Cstatus}
                {item.Height}
                {item.Weight}
                {item.Btype}
                {item.FatherFN}
                {item.FatherMN}
                {item.FatherLN}
                {item.MotherFN}
                {item.MotherMN}
                {item.MotherLN}
                {item.MotherMaidenN}
                {item.Elementary}
                {item.Secondary}
                {item.Vcourse}
                {item.College}
                {item.Citizenship}

                    <button onClick={() => onEdit(item)}>Edit</button>
                    <button onClick={() => onDelete(item.id)}>Delete</button>

                </li>
                ))}
            </ul>
    </div>
    );
};
export default ItemList;