import mongoose from 'mongoose';

const medicalTestSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  testType: {
    type: String,
    required: true,
    trim: true,
  },
  testDate: {
    type: Date,
    required: true,
  },
  resultValue: {
    type: String,
    required: true,
    trim: true,
  },
  referenceRange: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['normal', 'abnormal', 'critical'],
    default: 'normal',
  },
}, {
  timestamps: true,
});

export default mongoose.models.MedicalTest || mongoose.model('MedicalTest', medicalTestSchema);