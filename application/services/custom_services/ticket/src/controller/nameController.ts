import { Request, Response } from 'express';
import { nameService } from '../service/nameService';
import { CustomLogger } from '../config/Logger'
let name = new nameService();

export class nameController {
    
    constructor() { }
    
    public GetEntityById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GetEntityById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GetEntityById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GetEntityById');
    })}
public Delete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.Delete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: Delete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: Delete');
    })}
public Search(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.Search(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: Search');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: Search');
    })}
public Update(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.Update(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: Update');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: Update');
    })}
public Create(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.Create(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: Create');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: Create');
    })}
public SearchForUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.SearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: SearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: SearchForUpdate');
    })}
public GetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GetAllValues');
    })}
public GetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    name.GetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into nameController.ts: GetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from nameController.ts: GetNounCreatedBy');
    })}


}