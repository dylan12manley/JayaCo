export default function getSelectedValue(selector) {
  const stringValue = Array.from(document.querySelectorAll(selector)[0]).filter((elm) => elm.selected === true)[0]?.value;
  return parseInt(stringValue);
}
