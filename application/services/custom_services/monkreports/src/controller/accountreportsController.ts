import { Request, Response } from 'express';
import { accountreportsService } from '../service/accountreportsService';
import { CustomLogger } from '../config/Logger'
let accountreports = new accountreportsService();

export class accountreportsController {
    
    constructor() { }
    
    public GpDelete(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpSearch');
    })}
public GpUpdate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpUpdate');
    })}
public GpGetNounById(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpGetNounById');
    })}
public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    accountreports.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into accountreportsController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from accountreportsController.ts: GpGetNounCreatedBy');
    })}


}