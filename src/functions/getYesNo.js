export default function getYesNo(selector) {
  return Array.from(document.querySelectorAll(selector)).filter((elm) => elm.checked === true)[0]?.value === 'yes' ? 0 : 1;
}
