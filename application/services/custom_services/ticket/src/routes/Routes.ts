import { Request, Response, NextFunction } from "express";
import { nameController } from '../controller/nameController';


export class Routes {
    private name: nameController = new nameController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/name/:id').get(this.name.GetEntityById);
app.route('/name/:id').delete(this.name.Delete);
app.route('/name/get/search').get(this.name.Search);
app.route('/name').put(this.name.Update);
app.route('/name').post(this.name.Create);
app.route('/name/get/update').put(this.name.SearchForUpdate);
app.route('/name').get(this.name.GetAllValues);
app.route('/name/userid/created_by').get(this.name.GetNounCreatedBy);
     }

}