const stringToColor = (string: string): string => {
  let hash: number = 0;

  for (let i: number = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color: string = "#";

  for (let i: number = 0; i < 3; i += 1) {
    const value: number = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

const avatar = (name: string) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children:   name.includes(" ") ?`${name.split(" ")[0][0]}${name.split(" ")[1][0]}` : `${name[0]}${name[1]}`,
  };
};

export default avatar;
