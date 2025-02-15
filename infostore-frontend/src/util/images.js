export function convertToBase64 (file) {
  const reader = new FileReader ();
  const promise = new Promise ((resolve, reject) => {
    reader.onload = e => resolve (e.target.result);
    reader.onerror = e => reject (e);
  });

  reader.readAsDataURL (file);
  console.log (promise);

  return promise;
}
