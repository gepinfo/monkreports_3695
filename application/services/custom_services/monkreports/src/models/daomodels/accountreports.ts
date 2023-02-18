
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const accountreportsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   reportname: String,
   monkreportid: String
})

const accountreportsModel = mongoose.model('accountreports', accountreportsSchema, 'accountreports');
export default accountreportsModel;
