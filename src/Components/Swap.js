const Swap = (a, b) => {
  // let a = 10;
  // let b = 20;
  // console.log("Before Swaping a:-" + a);
  // console.log("Before Swaping b:-" + b);

  a = a + b;
  b = a - b;
  a = a - b;

  // console.log("After Swaping a :- " + a);
  // console.log("After Swaping  b:- " + b);

  return (
    <div>
      <h3>Before Swaping </h3>
      <label>Enter First Number :- </label>
      <input type="number" name="num1" id="num1" /> <br /> <br />
      <label>Enter Second Number :- </label>
      <input type="number" name="num2" id="num2" /> <br /> <br />
      <input type="submit" onClick={Swap} />
      <h3>After Swaping </h3>
      <label>Enter First Number :- </label>
      <input type="number" name="a" /> <br /> <br />
      <label>Enter Second Number :- </label>
      <input type="number" name="b" />
    </div>
  );
};

export default Swap;
