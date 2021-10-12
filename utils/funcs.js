export const toggle = (target, arr, update) => {
  const arrCopy = [ ...arr ];
  const targetIndex = arr.indexOf(target);

  // add to selected array
  if (targetIndex === -1) {
    arrCopy.push(target);
  } else {
    // remove from array
    arrCopy.splice(targetIndex, 1);
  }

  update(arrCopy);
};
