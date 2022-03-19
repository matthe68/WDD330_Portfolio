export async function getJSON(url) 
{
  let response = fetch(url)
    .then(function (response) 
    {
      if (!response.ok) 
      {
        throw Error(response.statusText);
      } 
      else 
      {
        return response.json();
      }
    })
    .catch(function (error) 
    {
      console.error(error);
    });
  return response;
}
export const getLocation = function(options = null) {
  return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};
// export function testGetQuakesForLocation(url, lat, long, radius) {
//   let earthQuakeURL = `${url}&latitude=${lat}&longitude=${long}&maxradiuskm=${radius}`;
//   return getJSON(earthQuakeURL);
// }