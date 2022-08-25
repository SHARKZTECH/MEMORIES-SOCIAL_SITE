import mongoose from "mongoose";
import PostMassage from "../models/postMessage.js"

export const getPosts=async(req,res)=>{
    try{
        const postMessage=await PostMassage.find();

        res.status(200).json(postMessage);
    }catch(err){
        res.status(404).json({message:err.message});
    }
 }

 export const createPost=async (req,res)=>{
    const post=req.body;
    const newPost=new PostMassage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);
    }catch(err){
       res.status(409).json({message:err.message});
    }
 }

 export const getPost=async(req,res)=>{
    const {id}=req.params;
    try{
        const post=await PostMassage.findById(id);
        res.status(200).json(post);
    }catch(err){
      res.status(404).json({message:err.message});
    }
 }
 
 export const likePost=async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id : ${id}`);
    const post=await PostMassage.findById(id);
    const upatedPost=await PostMassage.findByIdAndUpdate(id,{likeCount:post.likeCount +1 },{new:true});
    res.json(upatedPost);
 }

 export const deletePost=async(req,res)=>{
    const {id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id : ${id}`);
    await PostMassage.findByIdAndRemove(id);
    res.json({message:"Post Deleted succefully"});
 }

 export const updatePost=async(req,res)=>{
    const {id}=req.params;
    const { title, message, creator, selectedFile, tags } = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id : ${id}`);
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    await PostMassage.findByIdAndUpdate(id, updatedPost, { new: true });
    res.json(updatedPost);
 }