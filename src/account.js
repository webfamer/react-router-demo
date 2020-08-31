import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
function Index() {
  useEffect(() => {
    console.log('useEffect=>Index页面')
    return ()=>{
      console.log('溜了溜了，index页面')
    }
  },[])
  return <h2>JSPang.com</h2>;
}
function List() {
  useEffect(()=>{
    console.log('useEffect=>List页面')
  })
  return <h2>List-Page</h2>;
}

function Example() {
  const [count, setcount] = useState(0)
  useEffect(() => {
    console.log(`useEffect =>you clicked ${count} times`)
    return () => {
      console.log('=============')
    }
  }, [count])
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setcount(count + 1) }}>click me </button>
      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index} />
        <Route path="/list"  component ={List} />
      </Router>
    </div>
  )
}

export default Example;