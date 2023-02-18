import { Request, Response } from 'express';
import {accountreportsDao} from '../dao/accountreportsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let accountreports = new accountreportsDao();

export class accountreportsService {
    
    constructor() { }
    
    public  GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpDelete')
     let  accountreportsId = req.params.id;
     accountreports.GpDelete(accountreportsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpDelete')
         callback(response);
         });
    }
    
public  GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpSearch')
     let  accountreportsData = req.query;
     accountreports.GpSearch(accountreportsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpSearch')
         callback(response);
         });
    }
    
public  GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpUpdate')
     let  accountreportsData = req.body;
     accountreports.GpUpdate(accountreportsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpUpdate')
         callback(response);
         });
    }
    
public  GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpGetNounById')
     let  accountreportsId = req.params.id;
     accountreports.GpGetNounById(accountreportsId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpGetNounById')
         callback(response);
         });
    }
    
public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpGetAllValues')
     
     accountreports.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpCreate')
     let  accountreportsData = req.body;
     accountreports.GpCreate(accountreportsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into accountreportsService.ts: GpGetNounCreatedBy')
     let  accountreportsData = { created_by: req.query.createdby };
     accountreports.GpGetNounCreatedBy(accountreportsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from accountreportsService.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}