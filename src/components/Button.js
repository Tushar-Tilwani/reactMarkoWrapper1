import React, { useEffect, useRef, useState } from 'react';
import ButtonM from './Button.marko';

function Button() {
  const [counter, setCounter] = useState(0);
  const [component, setComponent] = useState(null);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      const result = ButtonM.renderSync({ reactCounter: counter });
      result.replaceChildrenOf(ref.current);
      const component = result.getComponent();
      setComponent(component);
    }
  }, [ref, setComponent]);

  useEffect(() => {
    if (component) {
      component.input = { reactCounter: counter };
    }
  }, [counter]);

  return (
    <>
      <button className="btn btn-blue" onClick={() => setCounter(counter + 1)}>
       React Button {counter}
      </button>
      <div ref={ref}></div>
    </>
  );
}

export default Button;
