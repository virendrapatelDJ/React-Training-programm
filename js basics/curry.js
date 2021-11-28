

function logger(type) {
    // if(type === 'error'){
    //     console.log("Error: " , message)
    // }
    // if(type === 'info'){
    //     console.log("Info: " , message)
    // }
  
    return (message) => console.log(type, message);
  }
  
  // logger('error', 'This is Error Message');
  // logger('info', 'This is Info Message');
  
  // logger('error', 'Hello Error');
  // logger('error', 'Hello');
  
  // const errorLogger = logger('error')
  // const infoLogger = logger('info')
  
  // errorLogger('Message1')
  // errorLogger('Message2')
  // infoLogger('Message2')
  // infoLogger('Message3')
  
  // logger("Degub")('Mesage for debug')
  
  function multiplyWith(number1) {
    return (number) => number * number1;
  }
  
  const with12 = multiplyWith(12); //(number)=>number * 12
  
  console.log(with12(2));
  console.log(with12(3));
  console.log(with12(5));
  
  const multi15 = multiplyWith(15);
  
  console.log(multi15(12));
  
  const some = (a) => (b) => (c) => a + b + c;
  
  console.log(some(1)(2)(3));
  