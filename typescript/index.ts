// export function getRandomString()
function getRandomString(length: number): string {
  const CHARACTERS =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * CHARACTERS.length);
    randomString += CHARACTERS.charAt(randomIndex);
  }
  return randomString;
}
