import Joi from "@hapi/joi";

export const registerValidation=(data)=>{
    const schema=Joi.object({
        name:Joi.string().min(1).required(),
        email:Joi.string().min(4).required(),
        password:Joi.string().min(4).required()
    });
    return schema.validate(data)

}

export const loginValidation=(data)=>{
    const schema=Joi.object({
        email:Joi.string().min(4).required(),
        password:Joi.string().min(4).required()
    });
    return schema.validate(data)

}

