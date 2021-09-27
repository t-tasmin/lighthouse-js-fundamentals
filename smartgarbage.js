function smartGarbage(trash, bins)
{
  bins[trash]++;
  return bins;

}



let G=smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
console.log(G);