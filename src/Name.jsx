
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addName, loadNames, removeName } from "./redux/reducers/name";

const Name = () => {
    const names = useSelector(state => state.name.names);
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    useEffect(() => {
        const storedNames = JSON.parse(localStorage.getItem('namesList'));
        if (storedNames) {
            dispatch(loadNames(storedNames));
        }
    }, [dispatch]);

    const handleAddName = () => {
        if (name.trim() !== '') {
            dispatch(addName({ name }));
            setName('');
        }
    };

    const handleRemoveName = (nameToRemove) => {
        dispatch(removeName(nameToRemove));
    };

    useEffect(() => {
        localStorage.setItem('namesList', JSON.stringify(names));
    }, [names]);

    return (
        <div>
            <h1>Names</h1>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleAddName}>Add</button>
            <div>
                {names.map((item, index) => (
                    <div key={index}>
                        <h1>{item.name} <button onClick={() => handleRemoveName(item.name)}>Delete</button></h1>
                        
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Name;
