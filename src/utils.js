export const getRandomPositionCoordinate = (range) =>
(Math.floor(Math.random() * range * 2) - range) / 10;

export const getRandomSize = () => (Math.floor(Math.random() * 15) + 1) / 10;