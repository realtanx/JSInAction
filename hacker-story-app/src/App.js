import { useState } from 'react';
import './App.css';
import List from './component/List';
import Search from './component/Search';

function App() {
  const mockList = [
    {
      title: "React",
      objectId: 0
    },
    {
      title: "Redux",
      objectId: 1
    }
  ]

  const [stories, setStories] = useState(mockList)

  console.log('render App');

  function handleSearch(keyword) {
    console.log(`handleSearch => ${keyword}`);

    const searchedList = mockList.filter((item) => {
      return item.title.toLowerCase().includes(keyword.toLowerCase())
    })

    setStories(searchedList)
  }

  function handleRemoveStory(item) {
    const newStories = stories.filter((story) => item.objectId !== story.objectId);
    setStories(newStories)
  }

  return (
    <div>
      <h1>Story</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List listData={stories} onRemoveItem={handleRemoveStory} />
    </div>
  );
}

export default App;
