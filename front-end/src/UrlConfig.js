export const api = `https://jmserver.herokuapp.com/api`;
export const imageApi = `https://jmserver.herokuapp.com`;

export const publicUrl = (fileName) =>{
    return `${api}/public/${fileName}`;
}

export const ImageUrl = (fileName) =>{
    return `${imageApi}/public/${fileName}`;
}