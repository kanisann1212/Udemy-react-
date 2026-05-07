import { useRef, forwardRef, useImperativeHandle } from "react";

const Input = forwardRef((props, ref) => {
  const InputRef =useRef()
  
  useImperativeHandle(ref,()=>({
    myFocus(){
      InputRef.current.focus();
    }
  }))
  return <input type="text" ref={InputRef} />
})

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref}/>
      <button onClick={() => ref.current.myFocus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;
