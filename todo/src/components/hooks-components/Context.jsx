import React, { createContext, useContext } from 'react';

const DemoContext = createContext({});

const Child2 = (props) => {
    const context = useContext(DemoContext)
  return (
    <div>
      <h1>Child 2 - {props.name}</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas illo
        incidunt corporis totam sed modi, maiores sunt doloremque laborum
        repellendus eligendi fugit consectetur deleniti, labore magni sint
        assumenda fuga. Rem!
      </p>
    </div>
  );
};

const Child1Child = (props) => {
  // {name : 'jkustin'}

  const context = useContext(DemoContext)
  return (
    <div onClick={context.onNestedChildClick}>
      <Child2 name={props.name} />
      <p>
        Parent Component prop : {props.name} <h1>NESTED CHILD</h1> Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officia dolores architecto
        eveniet, saepe, rerum iure itaque impedit id commodi voluptatibus
        adipisci, illo enim totam sunt nemo optio deserunt quo dignissimos?
      </p>
    </div>
  );
};

const Child1 = (props) => {
    const context = useContext(DemoContext)
  return (
    <div>
      <h1>Child 1 - {props.name}</h1>
      <Child1Child name={props.name} />
    </div>
  );
};

function ContextContainer() {
  const onNestedChildClick = () => {
    console.log('NESTED CHILD CLICED');
  };
  const context = {
    onNestedChildClick: onNestedChildClick,
  };
  return (
    <DemoContext.Provider value={context}>
      <Child1 name="Justin" />
      <Child2 name="Jinnat" />
    </DemoContext.Provider>
  );
}

export { ContextContainer };
