import express from 'express';
import './db/mongoose.js';
import { Song } from './modelos/songs.js';
const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
app.post('/songs', (req, res) => {
    const song = new Song(req.body);
    song.save().then((song) => {
        res.send(song);
    }).catch((error) => {
        res.send(error);
    });
});
app.get('/songs', (req, res) => {
    const filtro_titulo = req.query.title ? { title: req.query.title.toString() } : {};
    const filtro_autor = req.query.autor ? { autor: req.query.autor.toString() } : {};
    Song.find(filtro_titulo).find(filtro_autor).then((songs) => {
        if (songs.length !== 0) {
            res.send(songs);
        }
        else {
            res.status(404).send();
        }
    }).catch(() => {
        res.status(500).send();
    });
});
app.patch('/songs', (req, res) => {
    if (!req.query.id) {
        res.status(400).send({
            error: 'An id must be provided in the query string',
        });
    }
    else if (!req.body) {
        res.status(400).send({
            error: 'Fields to be modified have to be provided in the request body',
        });
    }
    else {
        const allowedUpdates = ['title', 'autor', 'genre'];
        const actualUpdates = Object.keys(req.body);
        const isValidUpdate = actualUpdates.every((update) => allowedUpdates.includes(update));
        if (!isValidUpdate) {
            res.status(400).send({
                error: 'Update is not permitted',
            });
        }
        else {
            Song.findOneAndUpdate({ _id: req.query.id.toString() }, req.body, {
                new: true,
                runValidators: true,
            }).then((song) => {
                if (!song) {
                    res.status(404).send();
                }
                else {
                    res.send(song);
                }
            }).catch((error) => {
                res.status(400).send(error);
            });
        }
    }
});
app.delete('/songs', (req, res) => {
    if (!req.query.id) {
        res.status(400).send({
            error: 'An id must be provided',
        });
    }
    else {
        Song.findOneAndDelete({ _id: req.query.id.toString() }).then((song) => {
            if (!song) {
                res.status(404).send();
            }
            else {
                res.send(song);
            }
        }).catch(() => {
            res.status(400).send();
        });
    }
});
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
