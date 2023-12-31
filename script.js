//your JS code here. If required.
const ul = document.createElement("ul");
const body = document.querySelector("body");
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
ul.setAttribute("id","bands")
const ignoredWords = /(a|an|the)\s+/i;

bands.sort((a, b) => {
  const titleA = a.replace(ignoredWords, '');
  const titleB = b.replace(ignoredWords, '');
  return titleA.localeCompare(titleB);
});

bands.forEach(band => {
  const li = document.createElement("li");
  li.innerText = band;
  ul.appendChild(li);

});

body.appendChild(ul);