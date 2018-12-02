export const loadJson = (path) => fetch(path).then(data => data.json());
