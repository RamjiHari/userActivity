export const get_time_diff=async(visitStartTime)=>
{
  let d1 =new Date(visitStartTime)
  let d2 = new Date();
  return Math.round((d2-d1)/1000)
}
