import * as mongoose from 'mongoose';
import nameModel from '../models/daomodels/name';
import * as generate from 'nanoid/generate';
import * as dictionary from 'nanoid-dictionary';
import { CustomLogger } from '../config/Logger'




export class nameDao {
    private name = nameModel;

    

    constructor() { }
    
    public async GetEntityById(nameId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GetEntityById');

    

    
    
    
    this.name.findById(nameId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GetEntityById');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Delete(nameId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: Delete');

    

    
    
    
    this.name.findByIdAndRemove(nameId).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: Delete');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Search(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: Search');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(nameData).forEach(
                            ([key,value]) => {
                                if(value !== ''){
                                    andkey = key;
                                    and_obj[andkey] = value;
                                }
                                else{
                                    orkey = key;
                                    or_obj[orkey] = { $ne: '' }
                                }
                            }
                        );;
    this.name.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: Search');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Update(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: Update');

    

    
    
    
    this.name.findOneAndUpdate({ _id: nameData._id }, nameData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: Update');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async Create(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: Create');

    let temp = new nameModel(nameData);

    
    
    
    temp.save().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: Create');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async SearchForUpdate(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: SearchForUpdate');

    

    
    
    
    this.name.findOneAndUpdate({ _id: nameData._id }, nameData, { new: true }).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: SearchForUpdate');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GetAllValues');

    

    
    
    
    this.name.find().then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GetAllValues');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GetNounCreatedBy(nameData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into nameDao.ts: GetNounCreatedBy');

    

    
    
    
    this.name.aggregate(([
                        { $match: { $and: [{ created_by: nameData.created_by }] } }
                    ])).then((result)	=>
     
             	{

        new CustomLogger().showLogger('info', 'Exit from nameDao.ts: GetNounCreatedBy');

        

        
        
        callback(result);
}).catch((error)=>{
callback(error);
});}


}