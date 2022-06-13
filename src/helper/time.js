export function convertMinutesToHours(n) {
  let num = n;
  let hours = num / 60;
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return `${rhours} ${rhours === 1 ? 'hour' : 'hours'} 
   ${rminutes} minutes`;
}
