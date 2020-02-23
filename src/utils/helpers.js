const parseDateHumanReadable = (string) => {
  const date = new Date(string);

  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export {
  parseDateHumanReadable,
};
