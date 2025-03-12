
import React, { useEffect, useState } from 'react'

const State변경함수흐름3 = () => {
  const [student, setSetudent] = useState({
    name : 'hong',
    age : 20,
    score: 90
  });

  const changeData = () => {
    setSetudent((state) => {
      return {
        ...state,
        name : 'kim'
      }
    });

    setSetudent((state) => {
      return {
        ...state,
        age: 30
      }
    });

    console.log('함수 안');
    console.log(student);
  }

  useEffect(() => {
    changeData();
  }, [])

  console.log('함수밖');
  console.log(student);

  return (
    <div>State변경함수흐름3</div>
  )
}

export default State변경함수흐름3