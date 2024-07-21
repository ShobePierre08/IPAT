import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemForm = ({ item, onSuccess }) => {
    const [Fname, setFname] = useState('');
    const [Mname, setMname] = useState('');
    const [Lname, setLname] = useState('');
    const [Address, setAddress] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Baranggay, setBaranggay] = useState('');
    const [Btype, setBtype] = useState('');
    const [College, setCollege] = useState('');
    const [Cstatus, setCstatus] = useState('');
    const [Dbirth, setDbirth] = useState('');
    const [Elementary, setElementary] = useState('');
    const [FatherFN, setFatherFN] = useState('');
    const [FatherMN, setFatherMN] = useState('');
    const [FatherLN, setFatherLN] = useState('');
    const [MotherFN, setMotherFN] = useState('');
    const [MotherMN, setMotherMN] = useState('');
    const [MotherLN, setMotherLN] = useState('');
    const [MotherMaidenN, setMotherMaidenN] = useState('');
    const [Municipality, setMunicipality] = useState('');
    const [Secondary, setSecondary] = useState('');
    const [Sex, setSex] = useState('');
    const [Vcourse, setVcourse] = useState('');
    const [Weight, setWeight] = useState('');
    const [Citizenship, setCitizenship] = useState('');
    const [Height, setHeight] = useState('');
    

    useEffect(() => {
        if (item) {
            setFname(item.Fname); 
            setMname(item.Mname); 
            setLname(item.Lname); 
            setAddress(item.Address); 
            setEmail(item.Email);
            setPhone(item.Phone);
            setBaranggay(item.Baranggay); 
            setBtype(item.Btype); 
            setCollege(item.College); 
            setCstatus(item.Cstatus); 
            setDbirth(item.Dbirth);
            setElementary(item.Elementary);
            setFatherFN(item.FatherFN); 
            setFatherMN(item.FatherMN); 
            setFatherLN(item.FatherLN); 
            setMotherFN(item.MotherFN); 
            setMotherMN(item.MotherMN);
            setMotherLN(item.MotherLN);
            setMotherMaidenN(item.MotherMaidenN); 
            setMunicipality(item.Municipality); 
            setSecondary(item.Secondary); 
            setSex(item.Sex); 
            setVcourse(item.Vcourse);
            setWeight(item.Weight);
            setCitizenship(item.Citizenship); 
            setHeight(item.Height); 
            
        }
    }, [item]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { Fname, Mname, Lname, Address, Email, Phone, Baranggay, Btype, College, Cstatus, Dbirth, Elementary, FatherFN, FatherMN, FatherLN, MotherFN, MotherMN, MotherLN, MotherMaidenN, Municipality, Secondary, Sex, Vcourse, Weight, Citizenship, Height};

        try {
            if (item) {
                await
                axios.put(`http://localhost:8000/api/items/${item.id}/`, data);
            } 

            else {
                await
                axios.post('http://localhost:8000/api/items/', data);
            }
            onSuccess();
        } 
        catch (error) {
            console.error('There was an error submitting the form!', error);
        }

    };

    return (
   
        <form onSubmit={handleSubmit}>
            <h1>MGA NILALAMAN</h1>
            <div>
                <label>First name:</label>
                <input type="text" value={Fname} onChange={(e) => setFname(e.target.value)} />
            </div>
            
            <div>
                <label>Middle name:</label>
                <input type="text" value={Mname} onChange={(e) => setMname(e.target.value)} />
            </div>

            <div>
                <label>Last name:</label>
                <input type="text" value={Lname} onChange={(e) => setLname(e.target.value)} />
            </div>

            <div>
                <label>Email:</label>
                <input type="text" value={Email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                <label>Phone:</label>
                <input type="text" value={Phone} onChange={(e) => setPhone(e.target.value)} />
            </div>

            <div>
                <label>Address:</label>
                <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
            </div>


            <div>
                <label>Baranggay:</label>
                <input type="text" value={Baranggay} onChange={(e) => setBaranggay(e.target.value)} />
            </div>

            <div>
                <label>Municipality:</label>
                <input type="text" value={Municipality} onChange={(e) => setMunicipality(e.target.value)} />
            </div>
            
            <div>
                <label>Date of Birth:</label>
                <input type="date" value={Dbirth} onChange={(e) => setDbirth(e.target.value)} />
            </div>
              	
            <div>
                <label>Sex:</label>
                <input type="text" value={Sex} onChange={(e) => setSex(e.target.value)} />
            </div>

            <div>
                <label>Citizenship:</label>
                <input type="text" value={Citizenship} onChange={(e) => setCitizenship(e.target.value)} />
            </div>

            <div>
                <label>Civil Status:</label>
                <input type="text" value={Cstatus} onChange={(e) => setCstatus(e.target.value)} />
            </div>
          
            <div>
                <label>Height:</label>
                <input type="text" value={Height} onChange={(e) => setHeight(e.target.value)}  />
            </div>

            <div>
                <label>Weight:</label>
                <input type="text" value={Weight} onChange={(e) => setWeight(e.target.value)} />
            </div>


            <div>
                <label>Blood Type:</label>
                <input type="text" value={Btype} onChange={(e) => setBtype(e.target.value)} />
            </div>

            <div>
                <label>Father First Name:</label>
                <input type="text" value={FatherFN} onChange={(e) => setFatherFN(e.target.value)} />
            </div>
            
            <div>
                <label>Father Middle Name:</label>
                <input type="text" value={FatherMN} onChange={(e) => setFatherMN(e.target.value)} />
            </div>

            <div>
                <label>Father Last Name:</label>
                <input type="text" value={FatherLN} onChange={(e) => setFatherLN(e.target.value)} />
            </div>
            
            <div>
                <label>Mother First Name:</label>
                <input type="text" value={MotherFN} onChange={(e) => setMotherFN(e.target.value)} />
            </div>
          
            <div>
                <label>Mother Middle name:</label>
                <input type="text" value={MotherMN} onChange={(e) => setMotherMN(e.target.value)} />
            </div>

            <div>
                <label>Mother Last Name:</label>
                <input type="text" value={MotherLN} onChange={(e) => setMotherLN(e.target.value)} />
            </div>


            <div>
                <label>Mother Maiden Name:</label>
                <input type="text" value={MotherMaidenN} onChange={(e) => setMotherMaidenN(e.target.value)} />
            </div>

            <div>
                <label>Elementary:</label>
                <input type="text" value={Elementary} onChange={(e) => setElementary(e.target.value)} />
            </div>
            
            <div>
                <label>Secondary:</label>
                <input type="text" value={Secondary} onChange={(e) => setSecondary(e.target.value)} />
            </div>

            <div>
                <label>Vocational Course:</label>
                <input type="text" value={Vcourse} onChange={(e) => setVcourse(e.target.value)} />
            </div>
            
            <div>
                <label>College:</label>
                <input type="text" value={College} onChange={(e) => setCollege(e.target.value)} />
            </div>
          
            <button type="submit">Submit</button>
            
        </form>
    );
};
export default ItemForm;
