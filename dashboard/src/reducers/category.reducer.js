import { categoryConstants } from "../actions/constants";

const initialState = {
  categories: [],
  loading: false,
  error: null,
};
const buildNewCategories = (parentId,categories, category) => {
  let myCategories = [];

  if(parentId === undefined){
    return [
      ...categories,
      {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        type: category.type,
        children: []
      }
    ];
  }

  for (let cat of categories) {
    if(cat._id === parentId){   
      const newCategory = {
        _id: category._id,
        name: category.name,
        slug: category.slug,
        parentId: category.parentId,
        type: category.type,
        children: [],
      };
      myCategories.push({
        ...cat,
        children:
          cat.children.length > 0 ? [...cat.children,newCategory] : [newCategory]
      })
    }
    else{
      myCategories.push({
        ...cat,
        children:
          cat.children ? buildNewCategories(parentId,cat.children,category) : []
      });
    }
  }
  return myCategories;
};


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case categoryConstants.GET_ALL_CATEGORIES_SUCCESS:
      state = {
        ...state,
        categories: action.payload.categories
      };
      break;
    case categoryConstants.CREATE_NEW_CATEGORIES_REQUEST:
      state = {
        ...state,
        loading: true
      };
      break;
    case categoryConstants.CREATE_NEW_CATEGORIES_SUCCESS:
      const category = action.payload.category;
        const updatedCategories = buildNewCategories(
            category.parentId,
            state.categories,
            category
            )
        console.log('updatedCategories>>>>>>',updatedCategories);
      state = { 
        ...state,
        categories: updatedCategories,
        loading: false
      };
      break;
    case categoryConstants.CREATE_NEW_CATEGORIES_FAILED:
      state = {
        ...initialState,
        loading: false,
        error: action.payload.error
      };
      break;
      case categoryConstants.UPDATE_CATEGORIES_REQUEST:
        state = {
            ...state,
            loading: true
        }
        break;
    case categoryConstants.UPDATE_CATEGORIES_SUCCESS:
        state = {
            ...state,
            loading: false
        }
        break;
    case categoryConstants.UPDATE_CATEGORIES_FAILURE:
        state = {
            ...state,
            error: action.payload.error,
            loading: false
        }
        break;
    case categoryConstants.DELETE_CATEGORIES_REQUEST:
        state = {
            ...state,
            loading: true
        }
        break;
    case categoryConstants.DELETE_CATEGORIES_SUCCESS:
        state = {
            ...state,
            loading: false
        }
        break;
    case categoryConstants.DELETE_CATEGORIES_FAILURE:
        state = {
            ...state,
            loading: false,
            error: action.payload.error
        }
        break;
}

return state;
}