import mongoose, { Schema, Document } from 'mongoose';

export interface ITest extends Document {
  wpm: number;
  cpm: number;
  acc: number;
  score: number;
  user: any;
}

const testSchema = new Schema(
  {
    wpm: {
      type: Number,
    },
    cpm: {
      type: Number,
    },
    acc: {
      type: Number,
    },
    score: {
      type: Number,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { timestamps: true }
);

testSchema.set('toJSON', {
  transform: (pre: ITest, ret: ITest) => {
    ret.id = pre._id; // eslint-disable-line
    delete ret._id;
    delete ret.__v;
    return ret;
  },
});

const Test = mongoose.model<ITest>('test', testSchema);

export default Test;
