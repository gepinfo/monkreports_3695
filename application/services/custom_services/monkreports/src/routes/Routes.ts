import { Request, Response, NextFunction } from "express";
import { accountreportsController } from '../controller/accountreportsController';


export class Routes {
    private accountreports: accountreportsController = new accountreportsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/accountreports/:id').delete(this.accountreports.GpDelete);
app.route('/accountreports/get/search').get(this.accountreports.GpSearch);
app.route('/accountreports').put(this.accountreports.GpUpdate);
app.route('/accountreports/:id').get(this.accountreports.GpGetNounById);
app.route('/accountreports').get(this.accountreports.GpGetAllValues);
app.route('/accountreports').post(this.accountreports.GpCreate);
app.route('/accountreports/userid/created_by').get(this.accountreports.GpGetNounCreatedBy);
     }

}