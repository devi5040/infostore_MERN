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

export async function convertImageUrlToBase64 (imageUrl) {
  try {
    const response = await fetch (imageUrl);
    const blob = await response.blob (); // Convert response to Blob

    return new Promise ((resolve, reject) => {
      const reader = new FileReader ();
      reader.onloadend = () => resolve (reader.result); // Get Base64 result
      reader.onerror = reject;
      reader.readAsDataURL (blob); // Convert Blob to Base64
    });
  } catch (error) {
    console.error ('Error converting image to Base64:', error);
    return null;
  }
}
