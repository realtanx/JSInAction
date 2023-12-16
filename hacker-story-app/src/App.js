import React, { useState } from 'react';
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

  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  React.useEffect(() => {
    setIsLoading(true)
    getAsyncData().then(result => {
      setStories(result)
      setIsLoading(false)
    })
  }, [])

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

  function getAsyncData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockList)
      }, 2000);
    })
  }

  return (
    <div>
      <h1>Story</h1>
      <Search onSearch={handleSearch} />
      <hr />
      {
        isLoading ? (<p>Loading ... </p>) :
          (<List listData={stories} onRemoveItem={handleRemoveStory} />)
      }
    </div>
  );
}

export default App;
