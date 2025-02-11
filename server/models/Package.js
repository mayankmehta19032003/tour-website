import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  destination: String,
  image: String,
  duration: String,
  price: String,
  description: String
});

export default mongoose.model('Package', packageSchema); 