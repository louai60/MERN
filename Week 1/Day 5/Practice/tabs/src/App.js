import './App.css';
import Tabs from './Components/Tabs/Tabs';

const App = () => {
  const items = [
    { label: 'Tab 1', content: 'Tab 1 Content is Showing Here' },
    { label: 'Tab 2', content: 'Tab 2 Content is Showing Here' },
    { label: 'Tab 3', content: 'Tab 3 Content is Showing Here' },
  ];

  return (
    <div className="app">
      <Tabs items={items} />
    </div>
  );
};

export default App;
