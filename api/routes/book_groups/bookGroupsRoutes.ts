import { Router } from 'express';
import { getBookGroups } from './bookGroups';
import asyncMiddleware from '../../middleware/asyncMiddleware';

const router: Router = require('express').Router();
router.get('/', asyncMiddleware(getBookGroups));

module.exports = router;
