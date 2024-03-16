import { Schema, Types, model, models } from "mongoose";

export interface IEvents extends Document {
  _id: string;  
  title: string;
  description?: string;
  eventLocation?: string;
  createdAt: Date;
  imageURL: string;
  startdateTime: Date;
  enddateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: { _id: string, name: string };
  organizer: { _id: string, firstName: string, lastName: string };
};

const EventSchema = new Schema ({
  title: { type: String, required: true },
  description: { type: String },
  eventLocation: { type: String },
  createdAt: { type: Date, default: Date.now() },
  imageURL: { type: String, required: true },
  startdateTime: { type: Date, default: Date.now() },
  enddateTime: { type: Date, default: Date.now() },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Event = models.Event || model('Event', EventSchema);

export default Event;