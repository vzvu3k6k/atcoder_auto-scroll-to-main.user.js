// ==UserScript==
// @name     AtCoder.jp: auto scroll to main()
// @version  1
// @grant    none
// @match    https://atcoder.jp/contests/*
// @run-at   document-idle
// @license  CC0
// ==/UserScript==

const main = () => {
  const container = document.getElementById('submission-code');
  if (!container) return;

  for (const line of container.querySelectorAll('li')) {
    if (line.textContent.search(/main\s*\(/) !== -1) {
      container.scrollTo({ top: line.offsetTop - container.offsetTop });
      break;
    }
  }
};

try {
  // wait for code-prettier
  setTimeout(main, 500);
} catch (e) {
  console.error(e);
}
