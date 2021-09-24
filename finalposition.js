const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

console.log(finalPosition(moves));

function finalPosition(moves)
{
   var x=0;
   var y=0;

   var A=[];
  for (var i = 0; i < moves.length; i++)
  {
      if ( moves[i]==='north')
      { y+=1; }
      else if ( moves[i]==='south')
      { y-=1; }
      else if ( moves[i]==='east')
      { x+=1; }
      else if ( moves[i]==='west')
      { x-=1; }

  }// End of Loop
  A=[x ,y];
  return A;


}// End of Function