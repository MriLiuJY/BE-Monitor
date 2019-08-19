import mongoose from 'mongoose';

const Message = mongoose.model('Message');

export default function getAllErrorList() {
  const messgaes = Message.find({}).sort({
    'meta.createdAt': -1,
  });

  return messgaes;
}
