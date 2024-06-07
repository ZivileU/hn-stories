export const filterRandomItems = (data: number[], maxItems: number) => {
  let items: number[] = [];

  for (let i = 0; i < maxItems; i++) {
    const randomIndex = Math.floor(Math.random() * data.length - 1);
    const randomItem = data[randomIndex];
    items.push(randomItem);
  }

  return items;
};
