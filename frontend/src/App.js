import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState(null);
    const [sections, setSections] = useState({
        characters: true,
        numbers: true,
        highestAlphabet: true
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const parsedInput = JSON.parse(input);
            console.log('Submitting JSON:', parsedInput);

            const res = await axios.post('http://localhost:3001/bfhl', parsedInput);
            console.log('Response received:', res.data);
            setResponse(res.data);
        } catch (error) {
            if (error instanceof SyntaxError) {
                alert('Invalid JSON input. Please enter a valid JSON.');
            } else {
                console.error('Error submitting the form:', error);
            }
        }
    };

    const handleSectionChange = (e) => {
        const { name, checked } = e.target;
        setSections(prevSections => ({
            ...prevSections,
            [name]: checked
        }));
    };

    return (
        <div className='Form'>
            <h1>Enter JSON DATA</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='{"data": ["A", "B", "1", "2"]}'
                />
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div className='result'>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="characters"
                                checked={sections.characters}
                                onChange={handleSectionChange}
                            />
                            Characters
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="numbers"
                                checked={sections.numbers}
                                onChange={handleSectionChange}
                            />
                            Numbers
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="highestAlphabet"
                                checked={sections.highestAlphabet}
                                onChange={handleSectionChange}
                            />
                            Highest Alphabet
                        </label>
                    </div>
                    {sections.numbers && (
                        <div>
                            <h2>Numbers</h2>
                            <p>{response.numbers.join(', ')}</p>
                        </div>
                    )}
                    {sections.characters && (
                        <div>
                            <h2>Characters</h2>
                            <p>{response.alphabets.join(', ')}</p>
                        </div>
                    )}
                    {sections.highestAlphabet && (
                        <div>
                            <h2>Highest Alphabet</h2>
                            <p>{response.highest_alphabet.join(', ')}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default App;
