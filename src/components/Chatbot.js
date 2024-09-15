import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";

function Chatbot() {
  const steps = [

    {
      id: 'Fruits',
      message: 'Which fruit are you interested in?',
      trigger: 'fruitOptions'
    },
    {
      id: 'fruitOptions',
      options: [
        { value: 'Orange', label: 'Orange', trigger: 'Orange' },
        { value: 'Tangerine', label: 'Tangerine', trigger: 'Tangerine' },
        { value: 'Cucumber', label: 'Cucumber', trigger: 'Cucumber' },
        { value: 'Apple', label: 'Apple', trigger: 'Apple' },
        { value: 'Banana', label: 'Banana', trigger: 'Banana' },
        { value: 'Lichi', label: 'Lichi', trigger: 'Lichi' }
      ]
    },
    {
      id: 'Orange',
      message: 'Oranges are available at $2.50 per kg.',
      end: true
    },
    {
      id: 'Tangerine',
      message: 'Tangerines are available at $3.00 per kg.',
      end: true
    },
    {
      id: 'Cucumber',
      message: 'Cucumbers are available at $1.80 per kg.',
      end: true
    },
    {
      id: 'Apple',
      message: 'Apple are available at $3.50 per kg.',
      end: true
    },
    {
      id: 'Banana',
      message: 'Banana are available at $3.45 per kg.',
      end: true
    },
    {
      id: 'Lichi',
      message: 'Lichi are available at $4.80 per kg.',
      end: true
    }
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Segment floated="right">
      <ChatBot steps={steps} />
    </Segment>
    </div>
  );
}

export default Chatbot;