function calculateRectangleArea(length, width)
{
  if (length < 0 || width < 0)
  {
    return undefined;
  }
  else
  {
    return length * width;
  }

}

function calculateTriangleArea(base, height)
{
  if (base < 0 || height < 0)
  {
    
      return undefined;
  }
  else
  {
      return 0.5 * base* height;
  }
}

function calculateCircleArea(radius)
{
  if (radius < 0 )
  {
    
      return undefined;
  }
  else
  {
  return Math.PI*radius*radius;
  }

}

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined