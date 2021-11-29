import { useState } from 'react';
import { Fetch } from './Fetch';
import { Random } from './Random';
import { Ref } from './Ref';

function Container() {
  const [students, setStudents] = useState({
    name: 'virendra',
    age: 24,
  });

  function clickHandler() {
    console.log('Clicked');
    setStudents({
      ...students,
      name: 'Sandeep',
    });
    console.log(students);
  }

  return (
    <div>
      <Ref/>
      <Fetch />
      <main>
        <h1>Name : {students.name}</h1>
        <h1>Age : {students.age}</h1>

        <button onClick={clickHandler}>Click to change</button>
      </main>

      {/* <Random /> */}
    </div>
  );
}

export { Container };
