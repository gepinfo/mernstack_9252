import { Request, Response } from 'express';
import {nameDao} from '../dao/nameDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';

















let name = new nameDao();

export class nameService {
    
    constructor() { }
    
    public  GetEntityById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GetEntityById')
     let  nameId = req.params.id;
     name.GetEntityById(nameId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GetEntityById')
             
             
            callback(response);

         });
    }
    
public  Delete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: Delete')
     let  nameId = req.params.id;
     name.Delete(nameId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: Delete')
             
             
            callback(response);

         });
    }
    
public  Search(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: Search')
     let  nameData = req.query;
     name.Search(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: Search')
             
             
            callback(response);

         });
    }
    
public  Update(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: Update')
     let  nameData = req.body;
     name.Update(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: Update')
             
             
            callback(response);

         });
    }
    
public  Create(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: Create')
     let  nameData = req.body;
     name.Create(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: Create')
             
             
            callback(response);

         });
    }
    
public  SearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: SearchForUpdate')
     let  nameData = req.body;
     name.SearchForUpdate(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: SearchForUpdate')
             
             
            callback(response);

         });
    }
    
public  GetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GetAllValues')
     
     name.GetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GetAllValues')
             
             
            callback(response);

         });
    }
    
public  GetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into nameService.ts: GetNounCreatedBy')
     let  nameData = { created_by: req.query.createdby };
     name.GetNounCreatedBy(nameData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from nameService.ts: GetNounCreatedBy')
             
             
            callback(response);

         });
    }
    
    
    
    
}