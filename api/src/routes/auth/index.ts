import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/discord', passport.authenticate('discord'), (req, res) => {
  res.send(200);
});

router.get(
  '/callback/discord',
  passport.authenticate('discord'),
  (req, res) => {
    
    res.send({message: 'ok'})
  }
);

export default router;
