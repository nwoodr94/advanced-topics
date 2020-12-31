import React, {useState, useEffect} from 'react';
import axios from 'axios';


export default function App() {

    const [content, setContent] = useState('');

    useEffect(() => {
        const data = async() => {
            let result = await axios.get('http://localhost:8001/test').then(response => {
                console.log("real-time change");
                return response.data;
            });
            setContent(result);
        }

        data();
    }, []);

    return (<h1>{content}</h1>);
}