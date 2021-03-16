async function fetchApi(url) {
  const result = await fetch(`https://api.jikan.moe/v3/${url}`);
  return result.json();
}

function renderImage(selector, value) {
  const element = document.querySelector(selector);
  element.setAttribute("src", value);
}

function renderToEl(selector, value) {
  const element = document.querySelector(selector);
  element.innerHTML = value;
}

function renderAnimeSection(selector, data, amount = 5) {
  const popularContent = document.querySelector(`${selector} .content`);
  popularContent.innerHTML = "";
  for (let i = 0; i < amount; i++) {
    const item = data[i];
    if (item) {
      const wrapper = document.createElement("a");
      wrapper.setAttribute("href", "./detail.html?id=" + item.mal_id);
      wrapper.setAttribute("class", "item");
      const img = document.createElement("img");
      img.setAttribute("src", item.image_url);
      wrapper.append(img);
      const caption = document.createElement("p");
      caption.innerText = item.title;
      wrapper.append(caption);
      popularContent.append(wrapper);
    }
  }
}
