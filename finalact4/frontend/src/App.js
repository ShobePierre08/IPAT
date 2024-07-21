import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';

const App = () => {
    const [currentItem, setCurrentItem] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [items, setItems] = useState ([]);

    useEffect(() => {
        fetchItems();
    }, [refresh]);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error){
            console.error('Error bobo mo mag code', error);
        }
    }
    
    const handleEdit = (items) => {
        setCurrentItem(items);
    };

    const handleDelete = async (id) => {
        try {
            await
            axios.delete(`http://localhost:8000/api/items/${id}/`);
            setRefresh(!refresh);
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    const handleSuccess = () => {
        setCurrentItem(null);
        setRefresh(!refresh);
    };

    return (
        <div className="App">
            <ItemForm item={currentItem} onSuccess={handleSuccess} />
            <ItemList key={refresh} items={items} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};
export default App;