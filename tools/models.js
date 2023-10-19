const models = require('mongoose');

const connectionSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: '',
    required: false
  }
});

const streamSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  game: {
    type: Number,
    required: true
  },
  key: {
    type: String,
    required: true,
    unique: true
  },
  lastStartedAt: {
    type: Date,
    default: 0,
    required: false
  },
  lastEndedAt: {
    type: Date,
    default: 0,
    required: false
  }
});

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
  streams: {
    type: Array,
    default: [ streamSchema ],
    required: false,
    unique: true
  },
  following: {
    type: Array,
    default: [ BigInt ],
    required: false
  },
  status: {
    type: Number,
    default: 0,
    required: true
  },
  discord: {
    id: {
      type: BigInt,
      default: 0,
      required: false
    },
    email: {
      type: String,
      default: '',
      required: false
    },
    tokens: {
      refresh: {
        type: String,
        default: '',
        required: false
      },
      access: {
        type: String,
        default: '',
        required: false
      },
      expires: {
        type: Date,
        default: 0,
        required: false
      }
    }
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
    },
    connections: {
      type: Array,
      default: [ connectionSchema ],
      required: false
    },
    bio: {
      type: String,
      default: 'We don\'t know much about them yet.',
      required: false
    }
  }
}, {
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
});

const commentSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true,
    unique: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: BigInt,
    required: true
  }
});

const communityPostsSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true,
    index: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  comments: {
    type: Array,
    default: [ commentSchema ],
    required: false
  },
  favorites: {
    type: Array,
    default: [ BigInt ],
    required: false
  },
  author: {
    type: BigInt,
    required: true
  }
});

const requestSchema = new models.Schema({
  date: {
    type: Date,
    default: Date.now,
    required: true
  },
  path: {
    type: String,
    default: '',
    required: true
  },
  method: {
    type: String,
    default: '',
    required: true
  },
  userAgent: {
    type: String,
    default: '',
    required: true
  }
});

module.exports = {
  User: models.model('User', userSchema),
  Stream: models.model('Stream', streamSchema),
  CommunityPost: models.model('Post', communityPostsSchema),
  
  Request: models.model('Request', requestSchema)
};