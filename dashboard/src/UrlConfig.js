export const api = `http://localhost:5000/api`;
export const imageApi = `http://localhost:5000`;

export const publicUrl =(fileName) =>{
    return `http://localhost:5000/public/${fileName}`;
}


export const ImageUrl = (fileName) =>{
    return `${imageApi}/public/${fileName}`;
}