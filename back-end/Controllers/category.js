const CategoryModel = require('../models/category');
const slugify = require('slugify');
const shortid = require('shortid')


//create categories
const  createCategories = (categories,parentId = null) => {
     
    const categoryList = [];
    let category;
    if(parentId == null){
        category = categories.filter(cat => cat.parentId == undefined)
    }else{
        category = categories.filter(cat => cat.parentId == parentId)
    }
    for(let c of category){
        categoryList.push({
            _id: c._id,
            name: c.name,
            slug: c.slug,
            parentId: c.parentId,
            children: createCategories(categories,c._id)
        })
    }
    return categoryList;
}

exports.addCategory = (req,res) =>{
    
        const categoryObj = {
            name: req.body.name,
            slug: `${slugify(req.body.name)}-${shortid.generate()}`,
        }
        if(req.body.parentId){
            categoryObj.parentId = req.body.parentId
        }
        const cat = new CategoryModel(categoryObj)
        cat.save((err,category)=>{
            if(err){
                return res.status(400).json({
                    err
                })
            }
            if (category) {
                return res.status(201).json({
                    success:true,
                    category
                })
            }
        })
    }

exports.getCategories = (req,res) =>{
    CategoryModel.find({}).exec((err,categories)=>{
        if(err){
            return res.status(400).json({
                err
            })
        }
            if(categories){
                const categoryList = createCategories(categories);
                return res.status(200).json({
                    success:true,
                    categoryList
                })
            }
        });
    }


   