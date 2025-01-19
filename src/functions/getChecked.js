export default function getChecked(selector) {
  const elmementsArray = [];
  Array.from(document.querySelectorAll(selector))
    .filter((elm) => elm.checked)
    .forEach((elm) => elmementsArray.push(elm.value));
  return elmementsArray.toString();
}
