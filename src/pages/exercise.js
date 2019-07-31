// Input: “Life is cute”
// Output: “etuc4si2efiL4”

let array1 = "Life is cute";
let array2 = "";
let count = 0;

for (let i = 0; i < array1.length; i++) {
  count++;
  if (arra1[i] === " ") {
    array2[i] = count;
    count = 0;
  } else {
    array2[i] = array1[array1.length - i];
  }
}
