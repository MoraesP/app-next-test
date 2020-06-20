// let wrapper;
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function writingAll(stringTarget, container) {
//   wrapper = document.querySelector("[" + container + "]");
//   const stringsContainer = document.getElementsByClassName(stringTarget);

//   while (wrapper) {
//     for (let i = 0; i < stringsContainer.length; i++) {
//       const string = stringsContainer[i].textContent;
//       await write(string);
//       await sleep(1000);
//       await erase();
//       await sleep(1000);
//     }
//   }
// }

// async function write(text) {
//   let index = 0;
//   while (index < text.length) {
//     const timeout = 100;
//     await sleep(timeout);
//     index++;
//     wrapper.innerHTML = text.substring(0, index);
//   }
// }

// async function erase() {
//   while (wrapper.textContent.length) {
//     const timeout = 100;
//     await sleep(timeout);
//     wrapper.textContent = wrapper.textContent.substring(
//       0,
//       wrapper.textContent.length - 2
//     );
//   }
// }

// writingAll("item", "data-text");

import styles from "./typing-effect.module.scss";

export default function TypingEffect() {
  return (
    <div className={styles.wrapper}>
      <div data-text></div>
      <span className={styles.item}>UI & UX designer</span>
      <span className={styles.item}>Webdesigner</span>
      <span className={styles.item}>Frontend developer</span>

      <h2>Eu sou Pedro Moraes</h2>
    </div>
  );
}
