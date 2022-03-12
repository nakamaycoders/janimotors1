export const api = `http://localhost:5000/api`;
export const imageApi = `http://localhost:5000`;

export const publicUrl = (fileName) =>{
    return `${api}/public/${fileName}`;
}

export const ImageUrl = (fileName) =>{
    return `${imageApi}/public/${fileName}`;
}