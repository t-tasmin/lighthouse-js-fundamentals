function loopyLighthouse(range, multiples, words)
{
   
  let element = range[0];
  while (element <= range[1]){

    if (element % multiples[0] === 0 && element % multiples[1] === 0)
    { console.log(words[0] + words[1]); }
    else if (element % multiples[0] === 0)
    { console.log(words[0]); }
    else if ( element % multiples[1] === 0)
    { console.log(words[1]); }
    else
    {  
      console.log(element);
    }

    element++ ;
  }// End of Loop
  
  
}

loopyLighthouse([10, 20], [2, 5], ["Batty", "Beacon"]);
