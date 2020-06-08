interface Options {
  size: number;
  gridSize?: number;
}

const getColumnSize = (options: Options): string => {
  const { gridSize, size } = options;
  const result = gridSize ? (
    size / gridSize
  ) : (
    size / 12
  );
  return `${result * 100}%`;
};

export default getColumnSize;
