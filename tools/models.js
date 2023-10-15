const models = require('mongoose');

const connectionSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true,
    index: true,
    unique: true
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
  stream: {
    type: String,
    required: false,
    unique: true
  },
  following: {
    type: Array,
    default: [ BigInt ],
    required: false
  },
  statuses: {
    emailVerified: {
      type: Boolean,
      default: false,
      required: true
    },
    banned: {
      type: Boolean,
      default: false,
      required: true
    },
    verified: {
      type: Boolean,
      default: false,
      required: true
    },
    premium: {
      type: Boolean,
      default: false,
      required: true
    },
    partner: {
      type: Boolean,
      default: false,
      required: true
    },
    staff: {
      type: Boolean,
      default: false,
      required: true
    }
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

const streamSchema = new models.Schema({
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

const commentSchema = new models.Schema({
  id: {
    type: BigInt,
    required: true,
    index: true,
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

const dbTestModel = new models.Schema({
  time: {
    type: Date,
    required: true
  },
  requestHash: {
    type: String,
    required: true
  }
});

module.exports = {
  User: models.model('User', userSchema),
  Stream: models.model('Stream', streamSchema),
  CommunityPost: models.model('Post', communityPostsSchema),
  
  DatabaseTest: models.model('Test', dbTestModel)
};