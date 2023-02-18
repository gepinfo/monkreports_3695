import * as mongoose from 'mongoose';
import accountreportsModel from '../models/daomodels/accountreports';
import { CustomLogger } from '../config/Logger'


export class accountreportsDao {
    private accountreports = accountreportsModel;
    constructor() { }
    
    public async GpDelete(accountreportsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpDelete');

    

    
    
    
    this.accountreports.findByIdAndRemove(accountreportsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpDelete');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpSearch(accountreportsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpSearch');

    let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;

    
    
    Object.entries(accountreportsData).forEach(
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
    this.accountreports.find({$and: [
                            {
                                $or: [
                                   or_obj
                                ]
                            },
                            and_obj
                        ]}).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpSearch');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpUpdate(accountreportsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpUpdate');

    

    
    
    
    this.accountreports.findOneAndUpdate({ _id: accountreportsData._id }, accountreportsData, { new: true }).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpUpdate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounById(accountreportsId, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpGetNounById');

    

    
    
    
    this.accountreports.findById(accountreportsId).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpGetNounById');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpGetAllValues');

    

    
    
    
    this.accountreports.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(accountreportsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpCreate');

    let temp = new accountreportsModel(accountreportsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(accountreportsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into accountreportsDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.accountreports.aggregate(([
                        { $match: { $and: [{ created_by: accountreportsData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from accountreportsDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}