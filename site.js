(() => {
  const input = document.querySelector("[data-error-search]");
  if (!input) return;

  const cards = Array.from(document.querySelectorAll("[data-error-card]"));
  const count = document.querySelector("[data-result-count]");
  const empty = document.querySelector("[data-no-results]");

  const update = () => {
    const query = input.value.trim().toLocaleLowerCase();
    let visible = 0;
    cards.forEach((card) => {
      const matches = !query || card.dataset.search.includes(query);
      card.hidden = !matches;
      if (matches) visible += 1;
    });
    count.textContent = query
      ? `${visible} matching error ${visible === 1 ? "code" : "codes"}`
      : `${visible} documented error ${visible === 1 ? "code" : "codes"}`;
    empty.hidden = visible !== 0;
  };

  input.addEventListener("input", update);
  update();
})();
