const express = require('express');
const {verify} = require('jsonwebtoken');
const {User} = require('#@/tools/models');

const router = express.Router();

router.get('/', async (req, res) => {
  const { authorization } = req.headers;
  
  if (typeof authorization == 'undefined') {
    res.status(401);
    
    res.json({
      error: 1,
      code: 'ERR_AUTHORIZATION_MISSING'
    });
    
    return;
  }
  
  const token = authorization.split(' ')[1];
  
  if (typeof token == 'undefined') {
    res.status(401);
    
    res.json({
      error: 1,
      code: 'ERR_TOKEN_MISSING'
    });
    
    return;
  }

  const decoded = verify(token, process.env.JWT_SECRET);
  
  if (typeof decoded == 'undefined') {
    res.status(401);
    
    res.json({
      error: 1,
      code: 'ERR_TOKEN_INVALID'
    });
    
    return;
  }
  
  const userDocument = await User.findOne({
    id: decoded.id,
    email: decoded.email
  });
  
  if (userDocument === null) {
    res.status(401);
    
    res.json({
      error: 1,
      code: 'ERR_USER_NOT_FOUND'
    });
    
    return;
  }
  
  res.json({
    error: 0,
    code: 'SUCCESS_USER_FOUND',
    user: {
      id: userDocument.id,
      username: userDocument.username,
      displayName: userDocument.displayName,
      email: userDocument.email,
      streams: userDocument.streams,
      following: userDocument.following,
      status: userDocument.status,
      discord: userDocument.discord.id,
      profile: {
        color: userDocument.profile.color,
        avatar: userDocument.profile.avatar,
        banner: userDocument.profile.banner,
        bio: userDocument.profile.description,
        connections: userDocument.profile.connections
      },
      createdAt: userDocument.createdAt,
      updatedAt: userDocument.updatedAt
    }
  });
});

module.exports = router;