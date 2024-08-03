function Form() {
    function submitfunc(){
        
    }
  return (
    <div className="form">
      <p>Name:</p>
      <input type="text" />
      <p>Age:</p>
      <input type="text" />
      <p>Email:</p>
      <input type="text" />
      <button onClick={() => {
        submitfunc()
      }}> Submit</button>
    </div>
  );
}

export default Form;