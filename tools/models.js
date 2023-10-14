const models = require('mongoose');

const userSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true,
    index: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  displayName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  activated: {
    type: Boolean,
    default: false,
    required: true
  },
  stream: {
    type: String,
    required: false,
    unique: true
  },
  profile: {
    color: {
      type: Number,
      default: 6514417,
      required: true
    },
    avatar: {
      type: String,
      default: 'https://cdn.zleed.tv/default/avatar.png',
      required: true
    },
    banner: {
      type: String,
      default: 'https://cdn.zleed.tv/default/banner.png',
      required: true
    }
  },
  lastLiveAt: {
    type: Number,
    default: 0,
    required: false
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

module.exports = {
  User: models.model('User', userSchema),
};