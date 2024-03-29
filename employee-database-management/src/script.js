(async function () {
  const response = await fetch("./data.json");
  const data = await response.json();

  const employees = data;
})();
