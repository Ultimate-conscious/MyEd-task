import mongoose from 'mongoose';


interface IContact {
    firstName: string;
    lastName: string;
    schoolName: string;
    city: string;
    email: string;
    phone: string;
    message: string;
    createdAt: Date;
}

const contactSchema = new mongoose.Schema<IContact>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  schoolName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Contact = mongoose.model<IContact>('Contact', contactSchema);