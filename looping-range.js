function range(start, end, step){
  let A = [];

  if (start > end || step<= 0 || (start === undefined || end === undefined || step === undefined))
  {
    return A;
  }
  else
  {
    let i = 0;
    while (start <= end){
      A[i] = start;
      i++;
      start = start + step;
    }// End of Loop

    return A;
  }// End of Else

}// End of Function





console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));