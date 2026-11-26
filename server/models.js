import mongoose from 'mongoose';

const resumeItemSchema = new mongoose.Schema({
  job_title: { type: String, required: true, trim: true, maxlength: 100 },
  start_year: { type: Number, required: true, min: 1900, max: 2100, validate: Number.isInteger },
  end_year: { type: Number, min: 1900, max: 2100, validate: Number.isInteger },
  employer: { type: String, required: true, trim: true, maxlength: 100 },
  accomplishment: { type: String, required: true, trim: true, maxlength: 1000 },
  
  //Lilith's Quote Schema
  quote: { type: String, maxlength: 1000 },
  // author: { type: String, maxlength: 100 },
  //date: { type: String, trim: true, maxlength: 50 },
  // date: { type: Date, default: Date.now },
  // genre: { type: String, maxlength: 100 },
  // notes: { type: String, maxlength: 1000 },
  
}, { collection: 'resume_items', autoIndex: false });

export const ResumeItem = mongoose.models.ResumeItem || mongoose.model('ResumeItem', resumeItemSchema);
