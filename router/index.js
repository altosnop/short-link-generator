const express = require('express');
const shortid = require('shortid');
const LinkSchema = require('./../models/link-schema');
const { validateLink } = require('./../utils/validateLink');

const router = express.Router();

router.post('/short', async (req, res) => {
	try {
		const { link } = req.body;
		const baseDomain = process.env.BASE;
		const linkId = shortid.generate();

		if (validateLink(link)) {
			try {
				let candidate = await LinkSchema.findOne({ link });

				if (candidate) {
					return res.status(200).send({
						link: candidate.shortLink,
						message: 'Successfully got short link',
					});
				}

				const shortLink = `${baseDomain}/${linkId}`;

				candidate = new LinkSchema({ linkId, link, shortLink });

				await candidate.save();
				res.status(200).send({
					link: shortLink,
					message: 'Successfully generated short link',
				});
			} catch (error) {
				res.status(500).send({ message: 'Server error!' });
				console.log(error);
			}
		} else {
			res.status(400).send({ message: 'Invalid link!' });
		}
	} catch (error) {
		res.status(500).send({ message: 'An error occurred on server' });
		console.log(error);
	}
});

router.get('/:linkId', async (req, res) => {
	try {
		const linkId = req.params.linkId;
		const candidate = await LinkSchema.findOne({ linkId });

		if (candidate) {
			return res.redirect(candidate.link);
		} else {
			res.status(400).send({ message: 'Link not found!' });
		}
	} catch (error) {
		res.status(500).send({ message: 'An error occurred on server' });
		console.log(error);
	}
});

module.exports = router;
