import PlainTextExample from './components/text_editor'
import { useState, ChangeEvent } from 'react';
import Calendar from 'react-calendar'
import './App.css';
import 'react-calendar/dist/Calendar.css';



function App() {
    const [value, setValue] = useState(new Date());
    return (
        <div className="App">
            <div className="itemInput">
                <PlainTextExample />
            </div>
            <Calendar
                onChange={(value: Date, event: ChangeEvent<HTMLInputElement>) => {
                    setValue(value);
                    console.log(value)
                }
                }
                value={value}
            />


        </div>
    );
}

export default App;
