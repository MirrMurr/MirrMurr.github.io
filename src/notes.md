# Notes

```ts
const tile = document.querySelector('.tile')
const id = tile?.dataset.id;
tile.style.viewTransitionName = `tile-${id}`;

const overlay = tile.querySelector('.overlay');
const title = overlay.querySelector('.overlay-title');
const box = tile.querySelector('.box');
const img = tile.querySelector('img');

// Assign unique names
tile.style.viewTransitionName = `tile-${id}`
overlay.style.viewTransitionName = `overlay-${id}`;
title.style.viewTransitionName = `title-${id}`;
box.style.viewTransitionName = `box-${id}`;
img.style.viewTransitionName = `img-${id}`;



document.querySelectorAll('.tile').forEach(tile => {
  const id = tile.dataset.id;
  tile.style.viewTransitionName = `tile-${id}`
});
```
